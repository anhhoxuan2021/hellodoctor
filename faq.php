<?php
session_start();
require_once 'init.php';

$_title = 'CÁC CÂU HỎI THƯỜNG GẶP - Xin chào bác sĩ';
$_active_nav = 'faq';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'CÁC CÂU HỎI THƯỜNG GẶP';

?>
<!DOCTYPE html>
<!-- 
Template Name:: SmartAdmin PHP 7 Responsive WebApp - Template built with Bootstrap 4 and PHP 7
Version: 4.5.3
Author: Jovanni Lo
Website: https://smartadmin.lodev09.com
Purchase: https://wrapbootstrap.com/theme/smartadmin-php-7-responsive-webapp-WB05M9585
License: You must have a valid license purchased only from wrapbootstrap.com (link above) in order to legally use this theme for your project.
-->
<html lang="en">
    <?php include_once APP_PATH.'/includes/head.php'; ?>
    <body class="mod-bg-1 mod-nav-link ">
        <?php include_once APP_PATH.'/includes/theme.php'; ?>
        <!-- BEGIN Page Wrapper -->
        <div class="page-wrapper">
            <div class="page-inner">
                <?php include_once APP_PATH.'/includes/nav.php'; ?>
                <div class="page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">CÁC CÂU HỎI THƯỜNG GẶP</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> CÁC CÂU HỎI THƯỜNG GẶP
                            </h1>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <input class="form-control" id="myInput" type="text" placeholder="Nhập để tìm kiếm">
                            <br>
                            <div id="faq-content">
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical">
                                        <div class="row w100 Link">
                                            <div class="col-11 f-size16 f-bold">
                                                Xinchaobacsi là gì và gồm những dịch vụ nào?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Xinchaobacsi là nền tảng chăm sóc sức khỏe trực tuyến thông qua ứng dụng trên điện thoại thông minh hoặc qua website https://xinchaobacsi.vn. Xin chào Bác Sĩ hiện cung cấp những dịch vụ sau:
                                            <ul>
                                                <li>Đặt lịch hẹn với các Bác sĩ giỏi tại TP.HCM với đầy đủ các chuyên khoa.</li>
                                                <li>Giao thuốc tận nhà.</li>
                                                <li>Quản lý hồ sơ bệnh án điện tử.</li>
                                                <li>Tìm Bác sĩ.</li>
                                                <li>Tìm Bệnh viện.</li>
                                                <li>Tìm phòng xét nghiệm.</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Trình độ của các Bác sĩ tại Xinchaobacsi thì như thế nào?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>

                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Các Bác sĩ của chúng tôi là những Bác sĩ hàng đầu tại Sài Gòn và đang làm việc tại các Bệnh viện lớn. Chúng tôi đã chọn lựa và tìm kiếm Bác sĩ giỏi để làm việc cho chúng tôi.  Nếu bạn muốn xem thông tin về Bác sĩ, có thể xem trực tiếp thông tin trên website của từng Bác sĩ.</br>
                                                Bạn hoàn toàn có thể yên tâm khi được chăm sóc bởi các Bác sĩ chuyên khoa giỏi và tận tâm của chúng tôi.<br>
                                                Bạn có thể xem thông tin Bác sĩ tại đây: https://xinchaobacsi.vn/physician_list.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Mục tiêu của Xinchaobacsi là gì?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Mục tiêu của chúng tôi là giúp đỡ mọi người trên nước Việt Nam có một sức khỏe tốt, giúp mọi người tiếp cận với công nghệ hiện nay và giúp nâng tầm phong cách sống của mọi người hơn.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Nếu tôi tái khám thì có được giảm giá cho lần khám tiếp theo không?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Nếu bạn tái khám lần sau với Bác sĩ mà bạn đã khám, thì Xinchaobacsi chúng tôi sẽ giảm giá ưu đãi tùy theo giá mà giữa bạn và Bác sĩ thỏa thuận, hoặc theo giá Bác sĩ đó đặt ra.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Sau khi tạo lịch hẹn, tôi phải chờ trong bao lâu mới gặp được bác sĩ?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Sau khi bạn tạo lịch hẹn, Bác sĩ trực tổng đài bên chúng tôi sẽ gọi cho bạn qua số điện thoại bạn  đăng ký để lựa chọn giờ giấc hợp lý giữa bạn và Bác sĩ bạn muốn khám. Bác sĩ bên chúng tôi trực 24/24 nên bạn yên tâm, chúng tôi sẽ gọi điện sớm cho bạn để lựa chọn giờ giấc hợp lý cho bạn.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Các hồ sơ bệnh án, hình ảnh của bệnh nhân… Xinchaobacsi có chính sách bảo mật lưu trữ và quyền truy cập thế nào?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Về quyền riêng tư cá nhân của các bạn, chúng tôi cam kết rằng, chúng tôi sẽ bảo mật thông tin của các bạn để không bị người xấu lợi dụng. Nên các bạn có thể yên tâm về vấn đề này.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Nếu tôi mua trọn gói, tôi có được cho người khác cũng là thành viên trong gia đình sử dụng hay không?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Nếu đã mua gói dành riêng cho bạn thì chúng tôi chỉ hỗ trợ cho người đăng ký gói. Xinchaobacsi chúng tôi có gói dành cho nhiều người. Mong bạn tham khảo trên website.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Sau khi bác sĩ ra toa thuốc, nếu tôi muốn có dịch vụ giao thuốc tận nhà, tôi có phải trả thêm khoản phí nào không (ngoài tiền thuốc)?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Dịch vụ giao thuốc tận nhà của chúng tôi thì các bạn chỉ mất thêm phí giao hàng. Còn lại không mất thêm khoản phí nào.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Thời gian của một lần khám thường kéo dài trong bao lâu?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Thông thường, mỗi cuộc hẹn tùy thuộc theo bệnh tình của bệnh nhân, các Bác sĩ của chúng tôi sẽ trả lời tất cả các thắc mắc mà bệnh nhân mắc phải và thời gian chính là mọi thắc mắc của bệnh nhân được giải đáp.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Nếu bác sĩ yêu cầu làm xét nghiệm, Xinchaobacsi có thể tư vấn phòng xét nghiệm nào tiện nhất và có dịch vụ đến tận nhà?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Hiện tại Xinchaobacsi chưa hỗ trợ dịch vụ tại nhà. Nhưng bạn có thể tìm phòng xét nghiệm gần bạn nhất trên website https://xinchaobacsi.vn/lab_list.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Nếu trong quá trình tư vấn, tôi có thể hỏi một câu hỏi cho một người bệnh khác được không?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Trong quá trình tư vấn, Bác sĩ của Xinchaobacsi chúng tôi rất sẵn lòng trả lời giải đáp những câu hỏi thắc mắc nằm trong chuyên khoa của Bác sĩ.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Tôi không dùng thẻ tín dụng, tôi có thể chuyển khoản và gửi xinchaobacsi ủy nhiệm chi để được khám trước khi tiền vào tài khoản được không?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Bạn có thể gửi hình ảnh hóa đơn, chi tiết thông tin ngân hàng mà bạn đã gửi vào tài khoản của chúng tôi. Và gửi vào mail help@xinchaobacsi.vn, chúng tôi sẽ phản hồi cho bạn nhanh nhất có thể. Nhưng vì mục đích sức khỏe mọi người, chúng tôi đặt sức khỏe của bệnh nhân lên hàng đầu, chúng tôi sẽ linh động xem xét các trường hợp và có thể tạo lịch hẹn ngay. Chúng tôi có rất nhiều hình thức thanh toán như: Chuyển khoản, Master card, Visa,... nên các bạn có thể yên tâm về vấn đề thanh toán.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Dịch vụ Xinchaobacsi có mặt ở những nơi nào?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Dịch vụ Xinchaobacsi của chúng tôi có mặt trên mọi nơi tại Việt Nam. Dù bạn ở bất cứ nơi nào chúng tôi đều sẵn lòng giúp bạn.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Nếu các dấu hiệu khai báo ban đầu (nhịp tim, huyết áp, nhịp thở…) tôi không có thiết bị hỗ trợ nên không thể khai báo, vậy nó có ảnh hưởng đến quá trình và kết quả tư vấn không?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Khi đến với Xinchaobacsi, chúng tôi có gợi ý cho các bạn nhập số liệu thông tin như: Nhịp tim, huyết áp, nhiệt độ,... để giúp cho quá trình điều trị của Bác sĩ được diễn ra với kết quả tốt hơn. Nhưng nếu không có các thiết bị thì vẫn không bị ảnh hưởng nhiều đến quá trình điều trị. Đặc biệt hơn, chúng tôi có cung cấp một số loại đồng hồ có thể đo được nhịp tim, huyết áp, nhiệt độ,... với giá rất rẻ chúng tôi đang bán trên website.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 open-answer border-b-c111-s" style="cursor: pointer">
                                    <div class="row h50 middle-vertical Link">
                                        <div class="row w100 ">
                                            <div class="col-11 f-size16 f-bold">
                                                Vì sao nên sử dụng dịch vụ chăm sóc sức khỏe của Xinchaobacsi?
                                            </div>
                                            <div class="col-1 text-right"><i class="fa fa-angle-up f-size36"></i></div>
                                        </div>
                                    </div>
                                    <div class="row m-t5 faq-answer hide-faq m_b5 bg-faq p-tb5 p-rl10">
                                        <div>
                                            <div class="fl p-r10"><i class="fa fa-quote-left"></i></div>
                                            <div class="fr w100">
                                                Khi sử dụng dịch vụ chăm sóc sức khỏe của XinChaoBacSi, bạn sẽ được trải nghiệm những đặc tính sau:
                                                Tiện lợi:
                                                <ul>
                                                    <li>Đặt bác sĩ dễ dàng, nhanh chóng trên qua ứng dụng/website XinChaoBacSi</li>
                                                    <li>Bạn có thể thời gian bác sĩ hẹn linh hoạt theo nhu cầu bản thân</li>
                                                    <li>Theo dõi bệnh án điện tử ngay trên app, dễ dàng và bảo mật</li>
                                                    <li>Chat/ video call với bác sĩ để nhận tư vấn miễn phí mọi lúc, mọi nơi</li>
                                                </ul>
                                                <div class="w100">Chất lượng:</div>
                                                <ul>
                                                    <li>Các bác sĩ chuyên khoa giỏi và hiện đang công tác tại các bệnh viện hàng đầu tại TP.HCM</li>
                                                    <li>Bạn sẽ trải nghiệm cảm giác được khám bệnh trong sự thoải mái tại nhà riêng, không lo lây nhiễm khi đến bệnh viện đông đúc</li>
                                                    <li>Đội ngũ CSKH nhiệt tình, thân thiện</li>

                                                </ul>
                                                <div class="w100">Tiết kiệm:</div>
                                                <ul>
                                                    <li>Tiết kiệm thời gian (không xếp hàng, chờ đợi, thời gian di chuyển)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </main>
                    <!-- END Page Content -->
                    <?php include_once APP_PATH.'/includes/footer.php'; ?>
                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
        <?php include_once APP_PATH.'/includes/extra.php'; ?>
        <?php include_once APP_PATH.'/includes/js.php'; ?>
        <script>
           /* $(document).ready(function() {
                $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#myList li").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });*/

            $('#faq-content .open-answer').unbind('click').bind('click',function(){
                var find =$(this).find('.fa');
                if(find.hasClass('fa-angle-up')){
                    find.removeClass('fa-angle-up')
                    find.addClass('fa-angle-down');
                    $(this).find('.faq-answer').removeClass('hide-faq')
                }else{
                    find.addClass('fa-angle-up')
                    find.removeClass('fa-angle-down');
                    $(this).find('.faq-answer').addClass('hide-faq')
                }
            })


        </script>
    </body>
</html>
