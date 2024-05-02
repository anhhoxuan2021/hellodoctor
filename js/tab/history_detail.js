
function history_detail(){}
history_detail.NAME         = "history_detail";
history_detail.VERSION      = "1.2";
history_detail.DESCRIPTION  = "Class history_detail";

history_detail.prototype.constructor = history_detail;
history_detail.prototype = {
    init: function(){
        $("#btn-history").unbind("click").bind("click",function(){
            $('#history-detail-modal').modal('show')
        });

        $("#btn-history-save").unbind("click").bind("click",function(){
            var history_id = $('#history-f #history-id').val()
            if(history_id !=''){
                h.new_update_history(history_id,'');
            }else{
                h.new_update_history('','');
            }

        });

        $("#btn-history-detail-save").unbind("click").bind("click",function(){
            var history_id = $('#history-f #history-id').val()
            if(history_id !=''){
                h.new_update_history(history_id,'btn-history-detail-save');
            }else{
                h.new_update_history('','btn-history-detail-save');
            }

        });

        var patient_id = $("#patient-id").val();

        if(window.location.pathname.includes('dashboard.php')){
            var id = getUrlParameter1('id');

            if(id!=undefined){
                patient_id =id
            }

            h.get_history(patient_id);
        }else if(window.location.pathname.includes('appointment_edit.php')){
            h.get_history(patient_id);
        }

        if(window.location.pathname.includes('patient_appointment.php')){
            $('#history-f').find('input').prop("disabled","true")
            $('#history-f').find('textarea').prop("disabled","true")
            $('#history-detail-modal').find('input').prop("disabled","true")
            $('#history-detail-modal').find('textarea').prop("disabled","true")
            $('#history-detail-modal').find('#btn-history-detail-save').closest('div').css({"display":"none"})
            $('#btn-history-save').closest('div').css({"display":"none"})

        }
    },

    get_history:function(patient_identification_user){
        var link3 =link._history_user;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,patient_identification_user:patient_identification_user},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.history.history_id !=undefined && res.history.history_id !=null){
                    var data=res.history;

                    $('#history-f #history-id').val(data.history_id)

                    if(data.smoker_boolean==null || data.smoker_boolean==0 ) data.smoker_boolean=false
                    if(data.smoker_notes_text==null || data.smoker_notes_text==0) data.smoker_notes_text=''
                    if(data.surgeries_boolean==null || data.surgeries_boolean==0) data.surgeries_boolean=false
                    if(data.surgery_notes_text==null || data.surgery_notes_text==0) data.surgery_notes_text=''
                    if(data.stomach_problems_boolean==null || data.stomach_problems_boolean==0) data.stomach_problems_boolean=false
                    if(data.stomach_problem_notes_text==null || data.stomach_problem_notes_text==0) data.stomach_problem_notes_text=''

                    $('#history-f #Smoker1').prop("checked",data.smoker_boolean);
                    $('#history-f #SmokerNotes').val(data.smoker_notes_text);
                    $('#history-f #Surgeries1').prop("checked",data.surgeries_boolean);
                    $('#history-f #SurgeryNotes').val(data.surgery_notes_text);
                    $('#history-f #StomachProblems1').prop("checked",data.stomach_problems_boolean);
                    $('#history-f #StomachProblemNotes').val(data.stomach_problem_notes_text);

                    if(data.heart_disease_boolean==null || data.heart_disease_boolean==0) data.heart_disease_boolean=false
                    if(data.heart_disease_notes_text==null || data.heart_disease_notes_text==0) data.heart_disease_notes_text=''
                    if(data.diabetes_boolean==null || data.diabetes_boolean==0) data.diabetes_boolean=false
                    if(data.diabetes_notes_text==null || data.diabetes_notes_text==0) data.diabetes_notes_text=''
                    if(data.consume_alcohol_boolean==null || data.consume_alcohol_boolean==0) data.consume_alcohol_boolean=false
                    if(data.alcohol_consumption_notes_text==null || data.alcohol_consumption_notes_text==0) data.alcohol_consumption_notes_text=''

                    $('#history-f #HeartDisease1').prop("checked",data.heart_disease_boolean);
                    $('#history-f #HeartDiseaseNotes').val(data.heart_disease_notes_text);
                    $('#history-f #Diabetes1').prop("checked",data.diabetes_boolean);
                    $('#history-f #DiabetesNotes').val(data.diabetes_notes_text);
                    $('#history-f #ConsumeAlcohol1').prop("checked",data.consume_alcohol_boolean);
                    $('#history-f #AlcoholConsumptionNotes').val(data.alcohol_consumption_notes_text);

                    if(data.eye_problems_boolean==null || data.eye_problems_boolean==0) data.eye_problems_boolean=false
                    if(data.eye_problem_notes_text==null || data.eye_problem_notes_text==0) data.eye_problem_notes_text=''
                    if(data.liver_or_kidney_problems_boolean==null || data.liver_or_kidney_problems_boolean==0) data.liver_or_kidney_problems_boolean=false
                    if(data.liver_or_kidney_problem_notes_text==null || data.liver_or_kidney_problem_notes_text==0) data.liver_or_kidney_problem_notes_text=''
                    if(data.lung_disease_boolean==null || data.lung_disease_boolean==0) data.lung_disease_boolean=false
                    if(data.lung_disease_notes_text==null || data.lung_disease_notes_text==0) data.lung_disease_notes_text=''

                    $('#history-f #EyeProblems1').prop("checked",data.eye_problems_boolean);
                    $('#history-f #EyeProblemNotes').val(data.eye_problem_notes_text);
                    $('#history-f #LiverorKidneyProblems1').prop("checked",data.liver_or_kidney_problems_boolean);
                    $('#history-f #LiverorKidneyProblemNotes').val(data.liver_or_kidney_problem_notes_text);
                    $('#history-f #LungDisease1').prop("checked",data.lung_disease_boolean);
                    $('#history-f #LungDiseaseNotes').val(data.lung_disease_notes_text);

                    if(data.other_notes_text==null) data.other_notes_text=''
                    $('#history-f #OtherNotes').val(data.other_notes_text)
                    //history detail 1
                    if(data.condition_normal_birth_boolean==null || data.condition_normal_birth_boolean==0) data.condition_normal_birth_boolean=false
                    if(data.condition_surgery_boolean==null || data.condition_surgery_boolean==0) data.condition_surgery_boolean=false
                    if(data.condition_premature_birth_boolean==null || data.condition_premature_birth_boolean==0) data.condition_premature_birth_boolean=false
                    if(data.condition_suffocation_at_birth_boolean==null || data.condition_suffocation_at_birth_boolean==0) data.condition_suffocation_at_birth_boolean=false

                    $('#history-detail-modal #ConditionNormalBirth').prop("checked",data.condition_normal_birth_boolean);
                    $('#history-detail-modal #ConditionSurgery').prop("checked",data.condition_surgery_boolean);
                    $('#history-detail-modal #ConditionPrematureBirth').prop("checked",data.condition_premature_birth_boolean);
                    $('#history-detail-modal #ConditionSuffocationatbirth').prop("checked",data.condition_suffocation_at_birth_boolean);

                    if(data.condition_weight_text==null) data.condition_weight_text=''
                    if(data.condition_length_text==null) data.condition_length_text=''
                    if(data.condition_birth_defects_text==null) data.condition_birth_defects_text=''
                    if(data.condition_others_text==null) data.condition_others_text=''

                    $('#history-detail-modal #ConditionWeight').val(data.condition_weight_text);
                    $('#history-detail-modal #ConditionLength').val(data.condition_length_text);
                    $('#history-detail-modal #ConditionBirthDefects').val(data.condition_birth_defects_text);
                    $('#history-detail-modal #ConditionOthers').val(data.condition_others_text);
                    //2
                    if(data.risk_smoking_list_option_personal_habits !=null && data.risk_smoking_list_option_personal_habits !=''){
                        if(data.risk_smoking_list_option_personal_habits.no !=undefined)
                            $('#history-detail-modal #no1').prop("checked",data.risk_smoking_list_option_personal_habits.no);
                        if(data.risk_smoking_list_option_personal_habits.yes !=undefined)
                            $('#history-detail-modal #yes1').prop("checked",data.risk_smoking_list_option_personal_habits.yes);
                        if(data.risk_smoking_list_option_personal_habits.regular !=undefined)
                            $('#history-detail-modal #regular1').prop("checked",data.risk_smoking_list_option_personal_habits.regular);
                        if(data.risk_smoking_list_option_personal_habits.gaveup !=undefined)
                            $('#history-detail-modal #gaveup1').prop("checked",data.risk_smoking_list_option_personal_habits.gaveup);
                    }

                    if(data.risk_consume_alcohol_list_option_personal_habits !=null && data.risk_consume_alcohol_list_option_personal_habits !=''){
                        if(data.risk_consume_alcohol_list_option_personal_habits.no !=undefined)
                            $('#history-detail-modal #no2').prop("checked",data.risk_consume_alcohol_list_option_personal_habits.no);
                        if(data.risk_consume_alcohol_list_option_personal_habits.yes !=undefined)
                            $('#history-detail-modal #yes2').prop("checked",data.risk_consume_alcohol_list_option_personal_habits.yes);
                        if(data.risk_consume_alcohol_list_option_personal_habits.numberofcupperday !=undefined)
                            $('#history-detail-modal #Numberofcupsperday').val(data.risk_consume_alcohol_list_option_personal_habits.numberofcupperday);
                        if(data.risk_consume_alcohol_list_option_personal_habits.gaveup !=undefined)
                            $('#history-detail-modal #gaveup2').prop("checked",data.risk_consume_alcohol_list_option_personal_habits.gaveup);
                    }

                    if(data.risk_use_narcotic_list_option_personal_habits !=null && data.risk_use_narcotic_list_option_personal_habits !=''){
                        if(data.risk_use_narcotic_list_option_personal_habits.no !=undefined)
                            $('#history-detail-modal #no3').prop("checked",data.risk_use_narcotic_list_option_personal_habits.no);
                        if(data.risk_use_narcotic_list_option_personal_habits.yes !=undefined)
                            $('#history-detail-modal #yes3').prop("checked",data.risk_use_narcotic_list_option_personal_habits.yes);
                        if(data.risk_use_narcotic_list_option_personal_habits.regular !=undefined)
                            $('#history-detail-modal #regular3').prop("checked",data.risk_use_narcotic_list_option_personal_habits.regular);
                        if(data.risk_use_narcotic_list_option_personal_habits.gaveup !=undefined)
                            $('#history-detail-modal #gaveup3').prop("checked",data.risk_use_narcotic_list_option_personal_habits.gaveup);
                    }

                    if(data.risk_physical_activity_list_option_personal_habits !=null && data.risk_physical_activity_list_option_personal_habits !=''){
                        if(data.risk_physical_activity_list_option_personal_habits.no !=undefined)
                            $('#history-detail-modal #no4').prop("checked",data.risk_physical_activity_list_option_personal_habits.no);
                        if(data.risk_physical_activity_list_option_personal_habits.yes !=undefined)
                            $('#history-detail-modal #yes4').prop("checked",data.risk_physical_activity_list_option_personal_habits.yes);
                        if(data.risk_physical_activity_list_option_personal_habits.regular !=undefined)
                            $('#history-detail-modal #regular4').prop("checked",data.risk_physical_activity_list_option_personal_habits.regular);
                    }

                    if(data.risk_occupational_exposure_text==null) data.risk_occupational_exposure_text=''
                    if(data.risk_toilet_type_text==null) data.risk_toilet_type_text=''
                    if(data.risk_others_text==null) data.risk_others_text=''

                    $('#history-detail-modal #RiskOccupationalExposure').val(data.risk_occupational_exposure_text);
                    $('#history-detail-modal #RiskToiletType').val(data.risk_toilet_type_text);
                    $('#history-detail-modal #RiskOthers').val(data.risk_others_text);
                    //3
                    if(data.history_allergies_medicine_text==null) data.history_allergies_medicine_text=''
                    if(data.history_allergies_chemicals_text==null) data.history_allergies_chemicals_text=''
                    if(data.history_allergies_food_text==null) data.history_allergies_food_text=''
                    if(data.history_allergies_others_text==null) data.history_allergies_others_text=''

                    $('#history-detail-modal #HistoryAllergiesMedicine').val(data.history_allergies_medicine_text);
                    $('#history-detail-modal #HistoryAllergiesChemicals').val(data.history_allergies_chemicals_text);
                    $('#history-detail-modal #HistoryAllergiesFood').val(data.history_allergies_food_text);
                    $('#history-detail-modal #HistoryAllergiesOthers').val(data.history_allergies_others_text);
                    //3.2
                    if(data.history_diseases_heart_boolean==null || data.history_diseases_heart_boolean==0) data.history_diseases_heart_boolean=false
                    if(data.history_diseases_hypertension__boolean==null || data.history_diseases_hypertension__boolean==0) data.history_diseases_hypertension__boolean=false
                    if(data.history_diseases_diabetes_boolean==null || data.history_diseases_diabetes_boolean==0) data.history_diseases_diabetes_boolean=false
                    if(data.history_diseases_stomach_ache_boolean==null || data.history_diseases_stomach_ache_boolean==0) data.history_diseases_stomach_ache_boolean=false
                    if(data.history_diseases_diabetes_boolean==null
                        || data.history_diseases_diabetes_boolean==0) data.history_diseases_diabetes_boolean=false
                    if(data.history_diseases_chronic_lung_boolean==null || data.history_diseases_chronic_lung_boolean==0) data.history_diseases_chronic_lung_boolean=false
                    if(data.history_diseases_asthma_boolean==null || data.history_diseases_asthma_boolean==0) data.history_diseases_asthma_boolean=false
                    if(data.history_diseases_goitre_boolean==null || data.history_diseases_goitre_boolean==0) data.history_diseases_goitre_boolean=false
                    if(data.history_diseases_hepatitis_boolean==null ||data.history_diseases_hepatitis_boolean==0) data.history_diseases_hepatitis_boolean=false
                    if(data.history_diseases_congenital_heart_boolean==null || data.history_diseases_congenital_heart_boolean==0) data.history_diseases_congenital_heart_boolean=false
                    if(data.history_diseases_mental_boolean==null || data.history_diseases_mental_boolean==0) data.history_diseases_mental_boolean=false
                    if(data.history_diseases_autism_boolean==null || data.history_diseases_autism_boolean==0) data.history_diseases_autism_boolean=false
                    if(data.history_diseases_epileptic_boolean==null || data.history_diseases_epileptic_boolean==0) data.history_diseases_epileptic_boolean=false

                    $('#history-detail-modal #HistoryDiseasesHeart').prop("checked",data.history_diseases_heart_boolean);
                    $('#history-detail-modal #HistoryDiseasesHypertension ').prop("checked",data.history_diseases_hypertension__boolean);
                    $('#history-detail-modal #HistoryDiseasesDiabetes').prop("checked",data.history_diseases_diabetes_boolean);
                    $('#history-detail-modal #HistoryDiseasesStomachache').prop("checked",data.history_diseases_stomach_ache_boolean);
                    $('#history-detail-modal #HistoryDiseasesChronicLung').prop("checked",data.history_diseases_chronic_lung_boolean);
                    $('#history-detail-modal #HistoryDiseasesAsthma').prop("checked",data.history_diseases_asthma_boolean);
                    $('#history-detail-modal #HistoryDiseasesGoitre').prop("checked",data.history_diseases_goitre_boolean);
                    $('#history-detail-modal #HistoryDiseasesHepatitis').prop("checked",data.history_diseases_hepatitis_boolean);
                    $('#history-detail-modal #HistoryDiseasesCongenitalHeart').prop("checked",data.history_diseases_congenital_heart_boolean);
                    $('#history-detail-modal #HistoryDiseasesMental').prop("checked",data.history_diseases_mental_boolean);
                    $('#history-detail-modal #HistoryDiseasesAutism').prop("checked",data.history_diseases_autism_boolean);
                    $('#history-detail-modal #HistoryDiseasesEpileptic').prop("checked",data.history_diseases_epileptic_boolean);

                    if(data.history_diseases_cancer_text==null) data.history_diseases_cancer_text=''
                    if(data.history_diseases_tuberculosis_text==null) data.history_diseases_tuberculosis_text=''
                    if(data.history_diseases_others_text==null) data.history_diseases_others_text=''

                    $('#history-detail-modal #HistoryDiseasesCancer').val(data.history_diseases_cancer_text);
                    $('#history-detail-modal #HistoryDiseasesTuberculosis').val(data.history_diseases_tuberculosis_text);
                    $('#history-detail-modal #HistoryDiseasesOthers').val(data.history_diseases_others_text);
                    //4
                    if(data.defects_hearing_text==null) data.defects_hearing_text=''
                    if(data.defects_eye_sight_text==null) data.defects_eye_sight_text=''
                    if(data.defects_hand_text==null) data.defects_hand_text=''
                    if(data.defects_foot_text==null) data.defects_foot_text=''
                    if(data.defects_scoliosis_curvature_text==null) data.defects_scoliosis_curvature_text=''
                    if(data.defects_lip_cleft_palate_text==null) data.defects_lip_cleft_palate_text=''
                    if(data.defects_others_text==null) data.defects_others_text=''

                    $('#history-detail-modal #DefectsHearing').val(data.defects_hearing_text);
                    $('#history-detail-modal #DefectsEyeSight').val(data.defects_eye_sight_text);
                    $('#history-detail-modal #DefectsHand').val(data.defects_hand_text);
                    $('#history-detail-modal #DefectsFoot').val(data.defects_foot_text);
                    $('#history-detail-modal #DefectsScoliosisCurvature').val(data.defects_scoliosis_curvature_text);
                    $('#history-detail-modal #DefectsLipcleftPalate').val(data.defects_lip_cleft_palate_text);
                    $('#history-detail-modal #DefectsOthers').val(data.defects_others_text);
                    //5
                    if(data.surgery_notes_text==null) data.surgery_notes_text=''

                    $('#history-detail-modal #SurgeryNotes').val(data.surgery_notes_text);
                    //6.1
                    if(data.family_allergies_medicine_text==null) data.family_allergies_medicine_text=''
                    if(data.family_allergies_medicine_patient_text==null) data.family_allergies_medicine_patient_text=''
                    if(data.family_allergies_chemicals_text==null) data.family_allergies_chemicals_text=''
                    if(data.family_allergies_chemicals_patient_text==null) data.family_allergies_chemicals_patient_text=''
                    if(data.family_allergies_food_text==null) data.family_allergies_food_text=''
                    if(data.family_allergies_food_patient_text==null) data.family_allergies_food_patient_text=''
                    if(data.family_allergies_others_text==null) data.family_allergies_others_text=''
                    if(data.family_allergies_others_patient_text==null) data.family_allergies_others_patient_text=''

                    $('#history-detail-modal #FamilyAllergiesMedicine').val(data.family_allergies_medicine_text);
                    $('#history-detail-modal #FamilyAllergiesMedicinePatient').val(data.family_allergies_medicine_patient_text);
                    $('#history-detail-modal #FamilyAllergiesChemicals').val(data.family_allergies_chemicals_text);
                    $('#history-detail-modal #FamilyAllergiesChemicalsPatient').val(data.family_allergies_chemicals_patient_text);
                    $('#history-detail-modal #FamilyAllergiesFood').val(data.family_allergies_food_text);
                    $('#history-detail-modal #FamilyAllergiesFoodPatient').val(data.family_allergies_food_patient_text);
                    $('#history-detail-modal #FamilyAllergiesOthers').val(data.family_allergies_others_text);
                    $('#history-detail-modal #FamilyAllergiesOthersPatient').val(data.family_allergies_others_patient_text);
                    //6.2
                    if(data.family_diseases_heart_boolean==null || data.family_diseases_heart_boolean==0) data.family_diseases_heart_boolean=false
                    if(data.family_diseases_heart_notes_text==null ||
                        data.family_diseases_heart_notes_text==0) data.family_diseases_heart_notes_text=''
                    if(data.family_diseases_asthma_boolean==null ||
                        data.family_diseases_asthma_boolean==0) data.family_diseases_asthma_boolean=false
                    if(data.family_diseases_asthma_notes_text==null ||
                        data.family_diseases_asthma_notes_text==0) data.family_diseases_asthma_notes_text=''
                    if(data.family_diseases_hypertension_boolean==null ||
                        data.family_diseases_hypertension_boolean==0) data.family_diseases_hypertension_boolean=false

                    if(data.family_diseases_hypertension_notes_text==null) data.family_diseases_hypertension_notes_text=''
                    if(data.family_diseases_diabetes_boolean==null) data.family_diseases_diabetes_boolean=false
                    if(data.family_diseases_diabetes_notes_text==null) data.family_diseases_diabetes_notes_text=''
                    if(data.family_diseases_mental_boolean==null) data.family_diseases_mental_boolean=false
                    if(data.family_diseases_mental_notes_text==null) data.family_diseases_mental_notes_text=''
                    if(data.family_diseases_epileptic_boolean==null) data.family_diseases_epileptic_boolean=false
                    if(data.family_diseases_epileptic_notes_text==null) data.family_diseases_epileptic_notes_text=''

                    $('#history-detail-modal #FamilyDiseasesHeart').prop("checked",data.family_diseases_heart_boolean);
                    $('#history-detail-modal #FamilyDiseasesHeartNotes').val(data.family_diseases_heart_notes_text);
                    $('#history-detail-modal #FamilyDiseasesAsthma').prop("checked",data.family_diseases_asthma_boolean);
                    $('#history-detail-modal #FamilyDiseasesAsthmaNotes').val(data.family_diseases_asthma_notes_text);
                    $('#history-detail-modal #FamilyDiseasesHypertension').prop("checked",data.family_diseases_hypertension_boolean);
                    $('#history-detail-modal #FamilyDiseasesHypertensionNotes').val(data.family_diseases_hypertension_notes_text);
                    $('#history-detail-modal #FamilyDiseasesDiabetes').prop("checked",data.family_diseases_diabetes_boolean);
                    $('#history-detail-modal #FamilyDiseasesDiabetesNotes').val(data.family_diseases_diabetes_notes_text);
                    $('#history-detail-modal #FamilyDiseasesMental').prop("checked",data.family_diseases_mental_boolean);
                    $('#history-detail-modal #FamilyDiseasesMentalNotes').val(data.family_diseases_mental_notes_text);
                    $('#history-detail-modal #FamilyDiseasesEpileptic').prop("checked",data.family_diseases_epileptic_boolean);
                    $('#history-detail-modal #FamilyDiseasesEpilepticNotes').val(data.family_diseases_epileptic_notes_text);
                    //7
                    if(data.reproductive_contraceptive_methods_text==null) data.reproductive_contraceptive_methods_text=''
                    if(data.reproductive_last_pregnancy_text==null) data.reproductive_last_pregnancy_text=''
                    if(data.reproductive_number_of_pregnancies_number==null) data.reproductive_number_of_pregnancies_number=''
                    if(data.reproductive_number_of_miscarriages_number==null) data.reproductive_number_of_miscarriages_number=''
                    if(data.reproductive_number_of_abortions_number==null) data.reproductive_number_of_abortions_number=''
                    if(data.reproductive_number_of_births_number==null) data.reproductive_number_of_births_number=''
                    if(data.reproductive_normal_birth_number==null) data.reproductive_normal_birth_number=''
                    if(data.reproductive_surgery_number==null) data.reproductive_surgery_number=''
                    if(data.reproductive_breech_birth_number==null) data.reproductive_breech_birth_number=''
                    if(data.reproductive_term_births_number==null) data.reproductive_term_births_number=''
                    if(data.reproductive_preterm_births_number==null) data.reproductive_preterm_births_number=''
                    if(data.reproductive_living_children_number==null) data.reproductive_living_children_number=''
                    if(data.reproductive_gynaecological_disease_text==null) data.reproductive_gynaecological_disease_text=''

                    $('#history-detail-modal #ReproductiveContraceptivemethods').val(data.reproductive_contraceptive_methods_text);
                    $('#history-detail-modal #ReproductiveLastPregnancy').val(data.reproductive_last_pregnancy_text);
                    $('#history-detail-modal #ReproductiveNumberofPregnancies').val(data.reproductive_number_of_pregnancies_number);
                    $('#history-detail-modal #ReproductiveNumberofMiscarriages').val(data.reproductive_number_of_miscarriages_number);
                    $('#history-detail-modal #ReproductiveNumberofAbortions').val(data.reproductive_number_of_abortions_number);
                    $('#history-detail-modal #ReproductiveNumberofbirths').val(data.reproductive_number_of_births_number);
                    $('#history-detail-modal #ReproductiveNormalBirth').val(data.reproductive_normal_birth_number);
                    $('#history-detail-modal #ReproductiveSurgery').val(data.reproductive_surgery_number);
                    $('#history-detail-modal #ReproductiveBreechBirth').val(data.reproductive_breech_birth_number);
                    $('#history-detail-modal #ReproductiveTermbirths').val(data.reproductive_term_births_number);
                    $('#history-detail-modal #ReproductivePretermbirths').val(data.reproductive_preterm_births_number);
                    $('#history-detail-modal #ReproductiveLivingChildren').val(data.reproductive_living_children_number);
                    $('#history-detail-modal #ReproductiveGynaecologicalDisease').val(data.reproductive_gynaecological_disease_text);

                    //8
                    if(data.other_notes_text==null) data.other_notes_text=''
                    $('#history-detail-modal #OtherNotes').val(data.other_notes_text);
                    //
                }
            }
        });
    },

    new_update_history:function(history_id,el){
        var smoker_boolean =$('#history-f #Smoker1').is(':checked')
        var smoker_notes_text =$('#history-f #SmokerNotes').val()
        var surgeries_boolean =$('#history-f #Surgeries1').is(':checked')
        var surgery_notes_text =$('#history-f #SurgeryNotes').val()
        var stomach_problems_boolean =$('#history-f #StomachProblems1').is(':checked')
        var stomach_problem_notes_text =$('#history-f #StomachProblemNotes').val()

        var heart_disease_boolean =$('#history-f #HeartDisease1').is(':checked')
        var heart_disease_notes_text =$('#history-f #HeartDiseaseNotes').val()
        var diabetes_boolean =$('#history-f #Diabetes1').is(':checked')
        var diabetes_notes_text =$('#history-f #DiabetesNotes').val()
        var consume_alcohol_boolean =$('#history-f #ConsumeAlcohol1').is(':checked')
        var alcohol_consumption_notes_text =$('#history-f #AlcoholConsumptionNotes').val()

        var eye_problems_boolean =$('#history-f #EyeProblems1').is(':checked')
        var eye_problem_notes_text =$('#history-f #EyeProblemNotes').val()
        var liver_or_kidney_problems_boolean =$('#history-f #LiverorKidneyProblems1').is(':checked')
        var liver_or_kidney_problem_notes_text =$('#history-f #LiverorKidneyProblemNotes').val()
        var lung_disease_boolean =$('#history-f #LungDisease1').is(':checked')
        var lung_disease_notes_text =$('#history-f #LungDiseaseNotes').val()
        var other_notes_text = $('#history-f #OtherNotes').val()
        //history detail 1
        var condition_normal_birth_boolean =$('#history-detail-modal #ConditionNormalBirth').is(':checked')
        var condition_surgery_boolean =$('#history-detail-modal #ConditionSurgery').is(':checked')
        var condition_premature_birth_boolean =$('#history-detail-modal #ConditionPrematureBirth').is(':checked')
        var condition_suffocation_at_birth_boolean =$('#history-detail-modal #ConditionSuffocationatbirth').is(':checked')

        var condition_weight_text =$('#history-detail-modal #ConditionWeight').val()
        var condition_length_text =$('#history-detail-modal #ConditionLength').val()
        var condition_birth_defects_text =$('#history-detail-modal #ConditionBirthDefects').val()
        var condition_others_text =$('#history-detail-modal #ConditionOthers').val()
        //2
        var risk_smoking_no =($('#history-detail-modal #no1').is(':checked'))?1:0;
        var risk_smoking_yes =($('#history-detail-modal #yes1').is(':checked'))?1:0;
        var risk_smoking_regular =($('#history-detail-modal #regular1').is(':checked'))?1:0
        var risk_smoking_gaveup =($('#history-detail-modal #gaveup1').is(':checked'))?1:0

        var risk_smoking_list_option_personal_habits = {
            no:risk_smoking_no,
            yes:risk_smoking_yes,
            regular:risk_smoking_regular,
            gaveup:risk_smoking_gaveup
        }

        var risk_alcohol_no =($('#history-detail-modal #no2').is(':checked'))?1:0;
        var risk_alcohol_yes =($('#history-detail-modal #yes2').is(':checked'))?1:0;
        var risk_alcohol_regular =$('#history-detail-modal #Numberofcupsperday').val();
        var risk_alcohol_gaveup =($('#history-detail-modal #gaveup2').is(':checked'))?1:0

        var risk_consume_alcohol_list_option_personal_habits = {
            no:risk_alcohol_no,
            yes:risk_alcohol_yes,
            numberofcupperday:risk_alcohol_regular,
            gaveup:risk_alcohol_gaveup
        }

        var risk_narcotic_no =($('#history-detail-modal #no3').is(':checked'))?1:0;
        var risk_narcotic_yes =($('#history-detail-modal #yes3').is(':checked'))?1:0;
        var risk_narcotic_regular =($('#history-detail-modal #regular3').is(':checked'))?1:0
        var risk_narcotic_gaveup =($('#history-detail-modal #gaveup3').is(':checked'))?1:0

        var risk_use_narcotic_list_option_personal_habits = {
            no:risk_narcotic_no,
            yes:risk_narcotic_yes,
            regular:risk_narcotic_regular,
            gaveup:risk_narcotic_gaveup
        }

        var risk_physical_no =($('#history-detail-modal #no4').is(':checked'))?1:0;
        var risk_physical_yes =($('#history-detail-modal #yes4').is(':checked'))?1:0;
        var risk_physical_regular =($('#history-detail-modal #regular4').is(':checked'))?1:0

        var risk_physical_activity_list_option_personal_habits = {
            no:risk_physical_no,
            yes:risk_physical_yes,
            regular:risk_physical_regular
        }

        var risk_occupational_exposure_text =$('#history-detail-modal #RiskOccupationalExposure').val()
        var risk_toilet_type_text =$('#history-detail-modal #RiskToiletType').val()
        var risk_others_text =$('#history-detail-modal #RiskOthers').val()
        //3
        var history_allergies_medicine_text =$('#history-detail-modal #HistoryAllergiesMedicine').val()
        var history_allergies_chemicals_text =$('#history-detail-modal #HistoryAllergiesChemicals').val()
        var history_allergies_food_text =$('#history-detail-modal #HistoryAllergiesFood').val()
        var history_allergies_others_text =$('#history-detail-modal #HistoryAllergiesOthers').val()
        //3.2
        var history_diseases_heart_boolean =$('#history-detail-modal #HistoryDiseasesHeart').is(':checked')
        var history_diseases_hypertension__boolean =$('#history-detail-modal #HistoryDiseasesHypertension').is(':checked')
        var history_diseases_diabetes_boolean =$('#history-detail-modal #HistoryDiseasesDiabetes').is(':checked')
        var history_diseases_stomach_ache_boolean =$('#history-detail-modal #HistoryDiseasesStomachache').is(':checked')
        var history_diseases_chronic_lung_boolean =$('#history-detail-modal #HistoryDiseasesChronicLung').is(':checked')
        var history_diseases_asthma_boolean =$('#history-detail-modal #HistoryDiseasesAsthma').is(':checked')
        var history_diseases_goitre_boolean =$('#history-detail-modal #HistoryDiseasesGoitre').is(':checked')
        var history_diseases_hepatitis_boolean =$('#history-detail-modal #HistoryDiseasesHepatitis').is(':checked')
        var history_diseases_congenital_heart_boolean =$('#history-detail-modal #HistoryDiseasesCongenitalHeart').is(':checked')
        var history_diseases_mental_boolean =$('#history-detail-modal #HistoryDiseasesMental').is(':checked')
        var history_diseases_autism_boolean =$('#history-detail-modal #HistoryDiseasesAutism').is(':checked')
        var history_diseases_epileptic_boolean =$('#history-detail-modal #HistoryDiseasesEpileptic').is(':checked')

        var history_diseases_cancer_text =$('#history-detail-modal #HistoryDiseasesCancer').val()
        var history_diseases_tuberculosis_text =$('#history-detail-modal #HistoryDiseasesTuberculosis').val()
        var history_diseases_others_text =$('#history-detail-modal #HistoryDiseasesOthers').val()
        //4
        var defects_hearing_text =$('#history-detail-modal #DefectsHearing').val()
        var defects_eye_sight_text =$('#history-detail-modal #DefectsEyeSight').val()
        var defects_hand_text =$('#history-detail-modal #DefectsHand').val()
        var defects_foot_text =$('#history-detail-modal #DefectsFoot').val()
        var defects_scoliosis_curvature_text =$('#history-detail-modal #DefectsScoliosisCurvature').val()
        var defects_lip_cleft_palate_text =$('#history-detail-modal #DefectsLipcleftPalate').val()
        var defects_others_text =$('#history-detail-modal #DefectsOthers').val()
        //5
        var surgery_notes_text_detail =$('#history-detail-modal #SurgeryNotes').val()
        //6.1
        var family_allergies_medicine_text =$('#history-detail-modal #FamilyAllergiesMedicine').val()
        var family_allergies_medicine_patient_text =$('#history-detail-modal #FamilyAllergiesMedicinePatient').val()

        var family_allergies_chemicals_text =$('#history-detail-modal #FamilyAllergiesChemicals').val()
        var family_allergies_chemicals_patient_text =$('#history-detail-modal #FamilyAllergiesChemicalsPatient').val()
        var family_allergies_food_text =$('#history-detail-modal #FamilyAllergiesFood').val()
        var family_allergies_food_patient_text =$('#history-detail-modal #FamilyAllergiesFoodPatient').val()
        var family_allergies_others_text =$('#history-detail-modal #FamilyAllergiesOthers').val()
        var family_allergies_others_patient_text =$('#history-detail-modal #FamilyAllergiesOthersPatient').val()
        //6.2
        var family_diseases_heart_boolean =$('#history-detail-modal #FamilyDiseasesHeart').is(':checked')
        var family_diseases_heart_notes_text =$('#history-detail-modal #FamilyDiseasesHeartNotes').val()
        var family_diseases_asthma_boolean =$('#history-detail-modal #FamilyDiseasesAsthma').is(':checked')
        var family_diseases_asthma_notes_text =$('#history-detail-modal #FamilyDiseasesAsthmaNotes').val()
        var family_diseases_hypertension_boolean =$('#history-detail-modal #FamilyDiseasesHypertension').is(':checked')
        var family_diseases_hypertension_notes_text =$('#history-detail-modal #FamilyDiseasesHypertensionNotes').val()
        var family_diseases_diabetes_boolean =$('#history-detail-modal #FamilyDiseasesDiabetes').is(':checked')
        var family_diseases_diabetes_notes_text =$('#history-detail-modal #FamilyDiseasesDiabetesNotes').val()
        var family_diseases_mental_boolean =$('#history-detail-modal #FamilyDiseasesMental').is(':checked')
        var family_diseases_mental_notes_text =$('#history-detail-modal #FamilyDiseasesMentalNotes').val()
        var family_diseases_epileptic_boolean =$('#history-detail-modal #FamilyDiseasesEpileptic').is(':checked')
        var family_diseases_epileptic_notes_text =$('#history-detail-modal #FamilyDiseasesEpilepticNotes').val()
        //7
        var reproductive_contraceptive_methods_text =$('#history-detail-modal #ReproductiveContraceptivemethods').val()
        var reproductive_last_pregnancy_text =$('#history-detail-modal #ReproductiveLastPregnancy').val()
        var reproductive_number_of_pregnancies_number =$('#history-detail-modal #ReproductiveNumberofPregnancies').val()
        reproductive_number_of_pregnancies_number=(reproductive_number_of_pregnancies_number=='')?0:reproductive_number_of_pregnancies_number

        var reproductive_number_of_miscarriages_number =$('#history-detail-modal #ReproductiveNumberofMiscarriages').val()
        reproductive_number_of_miscarriages_number=(reproductive_number_of_miscarriages_number=='')?0:reproductive_number_of_miscarriages_number

        var reproductive_number_of_abortions_number =$('#history-detail-modal #ReproductiveNumberofAbortions').val()
        reproductive_number_of_abortions_number=(reproductive_number_of_abortions_number=='')?0:reproductive_number_of_abortions_number

        var reproductive_number_of_births_number =$('#history-detail-modal #ReproductiveNumberofbirths').val()
        reproductive_number_of_births_number=(reproductive_number_of_births_number=='')?0:reproductive_number_of_births_number

        var reproductive_normal_birth_number =$('#history-detail-modal #ReproductiveNormalBirth').val()
        reproductive_normal_birth_number=(reproductive_normal_birth_number=='')?0:reproductive_normal_birth_number

        var reproductive_surgery_number =$('#history-detail-modal #ReproductiveSurgery').val()
        reproductive_surgery_number=(reproductive_surgery_number=='')?0:reproductive_surgery_number

        var reproductive_breech_birth_number =$('#history-detail-modal #ReproductiveBreechBirth').val()
        reproductive_breech_birth_number=(reproductive_breech_birth_number=='')?0:reproductive_breech_birth_number

        var reproductive_term_births_number =$('#history-detail-modal #ReproductiveTermbirths').val()
        reproductive_term_births_number=(reproductive_term_births_number=='')?0:reproductive_term_births_number

        var reproductive_preterm_births_number =$('#history-detail-modal #ReproductivePretermbirths').val()
        reproductive_preterm_births_number=(reproductive_preterm_births_number=='')?0:reproductive_preterm_births_number

        var reproductive_living_children_number =$('#history-detail-modal #ReproductiveLivingChildren').val()
        reproductive_living_children_number=(reproductive_living_children_number=='')?0:reproductive_living_children_number

        var reproductive_gynaecological_disease_text =$('#history-detail-modal #ReproductiveGynaecologicalDisease').val()
        //8
        var other_notes_text_detail =$('#history-detail-modal #OtherNotes').val()

        var patient_id = $("#patient-id").val();

        //for SQL
        var data_sql={Smoker:smoker_boolean,SmokerNotes:smoker_notes_text,
            Surgeries:surgeries_boolean,SurgeryNotes:surgery_notes_text,
            StomachProblems:stomach_problems_boolean,StomachProblemNotes:stomach_problem_notes_text,

            HeartDisease:heart_disease_boolean,HeartDiseaseNotes:heart_disease_notes_text,
            Diabetes:diabetes_boolean,DiabetesNotes:diabetes_notes_text,
            ConsumeAlcohol:consume_alcohol_boolean,AlcoholConsumptionNotes:alcohol_consumption_notes_text,

            EyeProblems:eye_problems_boolean,EyeProblemNotes:eye_problem_notes_text,
            LiverorKidneyProblems:liver_or_kidney_problems_boolean,LiverorKidneyProblemNotes:liver_or_kidney_problem_notes_text,
            LungDisease:lung_disease_boolean,LungDiseaseNotes:lung_disease_notes_text,
            OtherNotes:other_notes_text,
            patient_identification_user:patient_id,
            basic:0,
            history_id:history_id
        }
        //

        if(el=='btn-history-detail-save'){

            //SQL
            data_sql={
                ConditionNormalBirth:condition_normal_birth_boolean,ConditionSurgery:condition_surgery_boolean,
                ConditionPrematureBirth:condition_premature_birth_boolean,ConditionSuffocationatbirth:condition_suffocation_at_birth_boolean,

                ConditionWeight:condition_weight_text,ConditionLength:condition_length_text,
                ConditionBirthDefects:condition_birth_defects_text,ConditionOthers:condition_others_text,

                risk_smoking_list_option_personal_habits:risk_smoking_list_option_personal_habits,
                risk_consume_alcohol_list_option_personal_habits:risk_consume_alcohol_list_option_personal_habits,
                risk_use_narcotic_list_option_personal_habits:risk_use_narcotic_list_option_personal_habits,
                risk_physical_activity_list_option_personal_habits:risk_physical_activity_list_option_personal_habits,

                RiskOccupationalExposure:risk_occupational_exposure_text,RiskToiletType:risk_toilet_type_text,
                RiskOthers:risk_others_text,

                HistoryAllergiesMedicine:history_allergies_medicine_text,HistoryAllergiesChemicals:history_allergies_chemicals_text,
                HistoryAllergiesFood:history_allergies_food_text,HistoryAllergiesOthers:history_allergies_others_text,

                HistoryDiseasesHeart:history_diseases_heart_boolean,HistoryDiseasesHypertension:history_diseases_hypertension__boolean,
                HistoryDiseasesDiabetes:history_diseases_diabetes_boolean,HistoryDiseasesStomachache:history_diseases_stomach_ache_boolean,
                HistoryDiseasesChronicLung:history_diseases_chronic_lung_boolean,HistoryDiseasesAsthma:history_diseases_asthma_boolean,
                HistoryDiseasesGoitre:history_diseases_goitre_boolean,HistoryDiseasesHepatitis:history_diseases_hepatitis_boolean,
                HistoryDiseasesCongenitalHeart:history_diseases_congenital_heart_boolean,HistoryDiseasesMental:history_diseases_mental_boolean,
                HistoryDiseasesAutism:history_diseases_autism_boolean,HistoryDiseasesEpileptic:history_diseases_epileptic_boolean,

                HistoryDiseasesCancer:history_diseases_cancer_text,HistoryDiseasesTuberculosis:history_diseases_tuberculosis_text,
                HistoryDiseasesOthers:history_diseases_others_text,

                DefectsHearing:defects_hearing_text,DefectsEyeSight:defects_eye_sight_text,
                DefectsHand:defects_hand_text,DefectsFoot:defects_foot_text,
                DefectsScoliosisCurvature:defects_scoliosis_curvature_text,DefectsLipcleftPalate:defects_lip_cleft_palate_text,
                DefectsOthers:defects_others_text,

                SurgeryNotes:surgery_notes_text_detail,
                FamilyAllergiesMedicine:family_allergies_medicine_text,
                //family_allergies_medicine_patient_text:family_allergies_medicine_patient_text,
                FamilyAllergiesChemicals:family_allergies_chemicals_text,
                FamilyAllergiesChemicalsPatient:family_allergies_chemicals_patient_text,
                FamilyAllergiesFood:family_allergies_food_text,
                FamilyAllergiesFoodPatient:family_allergies_food_patient_text,
                FamilyAllergiesOthers:family_allergies_others_text,
                FamilyAllergiesOthersPatient:family_allergies_others_patient_text,

                FamilyDiseasesHeart:family_diseases_heart_boolean,
                FamilyDiseasesHeartNotes:family_diseases_heart_notes_text,
                FamilyDiseasesAsthma:family_diseases_asthma_boolean,
                FamilyDiseasesAsthmaNotes:family_diseases_asthma_notes_text,
                FamilyDiseasesHypertension:family_diseases_hypertension_boolean,
                FamilyDiseasesHypertensionNotes:family_diseases_hypertension_notes_text,
                FamilyDiseasesDiabetes:family_diseases_diabetes_boolean,
                FamilyDiseasesDiabetesNotes:family_diseases_diabetes_notes_text,
                FamilyDiseasesMental:family_diseases_mental_boolean,
                FamilyDiseasesMentalNotes:family_diseases_mental_notes_text,
                FamilyDiseasesEpileptic:family_diseases_epileptic_boolean,
                FamilyDiseasesEpilepticNotes:family_diseases_epileptic_notes_text,

                ReproductiveContraceptivemethods:reproductive_contraceptive_methods_text,
                ReproductiveLastPregnancy:reproductive_last_pregnancy_text,
                ReproductiveNumberofPregnancies:reproductive_number_of_pregnancies_number,
                ReproductiveNumberofMiscarriages:reproductive_number_of_miscarriages_number,
                ReproductiveNumberofAbortions:reproductive_number_of_abortions_number,
                ReproductiveNumberofbirths:reproductive_number_of_births_number,
                ReproductiveNormalBirth:reproductive_normal_birth_number,
                ReproductiveSurgery:reproductive_surgery_number,
                ReproductiveBreechBirth:reproductive_breech_birth_number,
                ReproductiveTermbirths:reproductive_term_births_number,
                ReproductivePretermbirths:reproductive_preterm_births_number,
                ReproductiveLivingChildren:reproductive_living_children_number,
                ReproductiveGynaecologicalDisease:reproductive_gynaecological_disease_text,
                OtherNotes:other_notes_text_detail,
                patient_identification_user:patient_id,
                basic:1,
                history_id:history_id
            }

        }

        let link3 =link._dasboardSaveUpdateHistory_sql;
        Object.assign(data_sql,{ "token": _token});
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            data:data_sql,
            "method": "POST",
            dataType: 'json',
            //contentType: 'application/json'

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.history_id !=null){
                    $('#history-f #history-id').val(res.history_id);

                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                    },3000)
                }else{
                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                    },3000)
                }
                ////
            }
        });
        //
    },
   //////////////SQL
    save_update_history_sql:function(UniqueID,data){
        Object.assign(data,{"token": _token,UniqueID:UniqueID});
        var link3 =link._dasboardSaveUpdateHistory_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);

                //
            }
        });
}


    //
}
var h = new history_detail();
$(function(){
    h.init();
});