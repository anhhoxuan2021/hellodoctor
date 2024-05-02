<?php

require_once 'init.php';
require_once 'init.db.php';

$providers = [
    'facebook' => 'Facebook',
    'google' => 'Google'
];

$provider = get('provider');
$provider_name = get($provider, $providers);

if (!$provider_name) throw new \Exception('Provider not specified');
if ($redirect = get('r')) $_SESSION['auth_redirect'] = $redirect;

// oauth
$config = \App\App::get_oauth_config($provider);

try {
    if (!($config && $config['providers'][$provider_name]['keys']['secret'])) {
        throw new \Exception('Missing OAuth credentials for '.$provider_name);
    }

    $hybridauth = new Hybridauth\Hybridauth($config);

    $is_connected = $hybridauth->isConnectedWith($provider_name);
    if ($is_connected) {
        $adapter = $hybridauth->getAdapter($provider_name);
    } else {
        $adapter = $hybridauth->authenticate($provider_name);
        $is_connected = $adapter->isConnected();
    }

    if ($is_connected) {
        $profile = $adapter->getUserProfile();
        $access_token = $adapter->getAccessToken();

        $authenticated = \App\App::social_auth($provider_name, $profile, $access_token);
        if ($authenticated) {
            // redirect to a secured page
            $redirect = APP_URL.'/php_auth_page.php?src=social';
            if (!empty($_SESSION['auth_redirect'])) {
                $redirect = $_SESSION['auth_redirect'];
                unset($_SESSION['auth_redirect']);
            }

            redirect($redirect);
        } else throw new \Exception('Failed to authenticate');
    }
} catch (\Exception $ex) {
    $_oauth_error = $ex->getMessage();
    require_once '_oauth.php';
}