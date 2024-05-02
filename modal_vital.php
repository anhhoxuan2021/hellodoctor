<!-- Modal center Large -->
<div class="modal fade" id="vitalsign-modal-center" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Sinh hiệu</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <div class="modal-body">
                <!---->
                <div class="row margin_b15">
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="BloodPressure">Huyết áp</label>
                            <div class="col-6 padding_l">
                                <input type="text" class="form-control" id="BloodPressureDiastolic">
                            </div>
                            <div class="col-6 padding_l">
                                <input type="text" class="form-control" id="BloodPressureSystolic">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="HeartRate">Nhịp tim (BPM)</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control" id="HeartRate">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="BreathingRate">Nhịp thở</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control" id="RespiratoryRate">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="O2Staturation">Độ bão hòa oxi</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control" id="O2Staturation">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row margin_b15">
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="Temperature">Nhiệt độ</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="Weight">Cân nặng</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="Height">Chiều cao</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="Glucose">Đường huyết</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row margin_b15">
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="PainLevel">Mức độ đau đớn</label>
                            <div class="col-12 padding_l margin_b15">
                                <input type="text" class="form-control" id="PainLevel">
                            </div>
                            <div class="col-12 padding_l">
                                <button class="btn bg-success waves-effect waves-themed width100 color-white margin-right15">Lưu</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="BMI">BMI (Chỉ số khối cơ thể)</label>
                            <div class="col-12 padding_l">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <label class=" col-12 padding_rl" for="Notes">Ghi chú</label>
                            <div class="col-12 padding_l">
                                <textarea class="form-control" rows="3" id="Notes"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <!---->
            </div>

        </div>
    </div>
</div>

<!-- Modal center alert-->
<div class="modal fade" id="modal-alert-appointment" tabindex="-1" role="dialog" aria-hidden="true" z-index:"2">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="height:346px;width:613px">
            <div class="modal-header" style="background-color: #797979;height:54px">
                <h4 class="modal-title">
                    <img src="<?= ASSETS_URL ?>/img1/white-large-logo.png" style="position: absolute;top:5px;height:45px;width:229px">
                </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12 margin-T5B5L20R20" style="font-weight: bold">Bạn nên đến ngay bệnh viện gần nhất để được chăm sóc khẩn cấp.</div>
                    <div class="col-12 " style="font-weight: bold;margin-left: 20px;margin-right: 20px;
                    font-size: 22px;color: red;">XinChaoBacSi.vn không thể hỗ trợ bạn.</div>
                    <div class="col-12 margin-T5B5L20R20" style="margin-top: 20px; font-weight: bold;";
                    margin-bottom: 20px">Nếu bạn cần xe cứu thương, xin vui lòng quay số dưới đây..</div>
                    <div class="col-12 color-gray51 text-center"
                        style="font-size: 18px;font-weight: bold;margin-top: 10px"><u>Gọi khẩn cấp</u>
                    </div>
                    <div class="col-12 text-center"
                         style="font-size: 22px;font-weight: bold;color: red"><u>115</u>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

