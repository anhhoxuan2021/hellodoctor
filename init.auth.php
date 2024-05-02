<?php

// get authenticated user and the session
$app->init_web_session();
$_user = $app->get_authenticated_user();