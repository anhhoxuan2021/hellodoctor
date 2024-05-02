<?php
// configure Bootstrap components UI
\Bootstrap\Component::register('table', 'Bootstrap\Components\Table');
\Bootstrap\Component::register('button', 'Bootstrap\Components\Button');
\Bootstrap\Component::register('nav', 'Bootstrap\Components\Nav');
\Bootstrap\Component::register('pagination', 'Bootstrap\Components\Pagination');

$_ui = new \Bootstrap\Component;

$_nav =array();
if (session_id()){
    if(count($_SESSION)>0 && $_SESSION['user_type_option_user_type'] !=''){
        $_nav = [
            'Thong_tin_ca_nhan' => [
                'title' => 'Thông Tin Cá Nhân',
                'icon' => 'fal fa-info-circle',
                'url' => APP_URL.'/dashboard.php'
            ],
        ];

        if($_SESSION['user_type_option_user_type']=='Admin'){
            $_nav['admin_report'] = [
                'title' => 'Admin Report',
                'icon' => 'fal fa-info-circle',
                'url' => APP_URL.'/dashboard_admin.php'
            ];
        }

        if($_SESSION['user_type_option_user_type']=='Patient'){
            $appt =[
                'title' => 'Lịch Hẹn',
                'icon' => 'fal fa-window',
                'url' => APP_URL.'/appointment_list.php'
            ];
        }else{
            $appt = [
                'title' => 'Lịch Hẹn',
                'icon' => 'fal fa-window',
                'items' => [
                    'Lich_hen' =>[
                        'title' => 'Lịch Hẹn',
                        'icon' => 'fal fa-window',
                        'url' => APP_URL.'/appointment_list.php'
                    ],
                    'Lich_hen_triage' => [
                        'title' => 'Phòng chờ xử lý',
                        'icon' => 'fal fa-window',
                        'url' => APP_URL.'/waiting_triage.php'
                    ],
                    'Lich_hen_doctor' => [
                        'title' => 'Phòng chờ Bác sĩ',
                        'icon' => 'fal fa-window',
                        'url' => APP_URL.'/doctor_waiting.php'
                    ],
                    'patient_for_doctor' => [
                        'title' => 'Bệnh nhân của bác sĩ',
                        'icon' => 'fal fa-window',
                        'url' => APP_URL.'/patient_for_doctor.php'
                    ],
                ]
            ];

            $_nav['Covid'] = [
                'title' => 'COVID-19',
                'icon' => 'fal fa-info-circle',
                'url' => APP_URL.'/covid.php'
            ];
        }

        $_nav['Lich_hen']=$appt;
        $_nav['Thanh_toan']=[
            'title' => 'Thanh Toán',
            'icon' => 'fal fa-shield-alt',
            'url' => APP_URL.'/invoice_list.php'
        ];

        $_nav['Danh_sach_benh_nhan']=[
            'title' => 'Bệnh nhân',
            'icon' => 'fal fa-th-list',
            'url' => APP_URL.'/patient_list.php'
        ];

    }
}
$_nav['Danh_sach_bac_si']=[
    'title' => 'Bác Sĩ',
    'icon' => 'fal fa-th-list',
    'url' => APP_URL.'/physician_list.php'
];
$_nav['Danh_sach_benh_vien']=[
    'title' => 'Bệnh Viện',
    'icon' => 'fal fa-hospital-alt',
    'url' => APP_URL.'/facility_list.php'
];
$_nav['Danh_sach_phong_lab']=[
    'title' => 'Phòng xét nghiệm',
    'icon' => 'fal fa-hospital-alt',
    'url' => APP_URL.'/lab_list.php'
];
$_nav['Danh_sach_nha_thuốc']=[
    'title' => 'Nhà thuốc',
    'icon' => 'fal fa-hospital-alt',
    'url' => APP_URL.'/pharmacy_list.php'
];
$_nav['Danh_sach_faq']=[
    'title' => 'Câu hỏi',
    'icon' => 'fal fa-hospital-alt',
    'url' => APP_URL.'/faq.php'
];
$_nav['pages']=[
    'title' => 'Ngôn Ngữ',
    'icon' => 'fal fa-exchange-alt',
    'items' => [
        'page_chat' => [
            'title' => 'Tiếng Việt',
            'url' => APP_URL.'/page_chat.php'
        ],
        'page_contacts' => [
            'title' => 'Tiếng Anh',
            'url' => APP_URL.'/page_contacts.php'
        ],
    ]
];

if (session_id()){
    if(count($_SESSION)>0){
        $_nav['Logout']=[
            'title' => 'Đăng Xuất',
            'icon' => 'fal fa-sign-out-alt',
            'url' => APP_URL.'/php/clearSession.php'
        ];
    }
}


?>
<script src="<?= ASSETS_URL ?>/js/vendors.bundle.js"></script>

<script src="<?= APP_URL ?>/js/your_script.js"></script>