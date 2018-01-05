const connectorData = {
  "connectors" : {
    "iready_dbz" : {
      "dispName" : "iready_dbz",
      "type" : "debezium_mysql",
      "database" : "zelda-slave-debezium-01 :: iready",
      "status" : "RUNNING",
      "derived_details" : {
         "snapshot mode": "initial",
         "database.history.kafka.topic": "localhost-acq-snapper5-test-db-history",
         "database.history.ddl.filter": ".*TEMPORARY.*TABLE.*,.*test_temp_24.*,.*test_temp_25.*"
      },
      "full_config" : {
        "connector.class": "io.debezium.connector.mysql.MySqlConnector",
        "database.user": "debezium",
        "transforms.router.type": "org.apache.kafka.connect.transforms.RegexRouter",
        "database.server.id": "37",
        "tasks.max": "1",
        "database.history.kafka.bootstrap.servers": "nintendo-kafka-datalake-01:9092",
        "database.history.kafka.topic": "zelda-acq-db-history",
        "transforms.router.regex": "^[\w-]+\.\w+\.(\w+)$",
        "transforms.router.replacement": "zelda-acq-iready-$1",
        "transforms": "router",
        "database.server.name": "iready_dbz_zelda8",
        "include.schema.changes": "false",
        "database.port": "3306",
        "database.hostname": "zelda-slave-debezium-01",
        "database.history.kafka.recovery.poll.interval.ms": "500",
        "name": "iready_dbz_zelda8",
        "database.whitelist": "iready",
        "database.history.ddl.filter": "DROP .*TEMPORARY .* TABLE IF EXISTS .+",
        "snapshot.mode": "initial"
      }
    },
    "iready_s3_sink" : {
      "dispName" : "iready_s3_sink",
      "type" : "s3_connector",
      "database" : null,
      "status" : "RUNNING",
      "derived_details" : {
        "s3.bucket.name": "navi-data-lake-raw",
        "tasks.max": "6",
        "s3.part.size": "5485760"
      },
      "full_config" : {
        "connector.class": "io.confluent.connect.s3.S3SinkConnector",
        "s3.region": "us-east-1",
        "topics.dir": "r",
        "flush.size": "1000000",
        "timezone": "GMT",
        "tasks.max": "6",
        "s3.part.size": "5485760",
        "transforms": "tombstoneFilter",
        "locale": "en",
        "format.class": "io.confluent.connect.s3.format.avro.AvroFormat",
        "partitioner.col.schema.version": "_v",
        "schema.generator.class": "io.confluent.connect.storage.hive.schema.TimeBasedSchemaGenerator",
        "value.converter": "io.confluent.connect.avro.AvroConverter",
        "key.converter": "io.confluent.connect.avro.AvroConverter",
        "s3.bucket.name": "zelda-data-lake-raw",
        "partition.duration.ms": "3600000",
        "s3.ssea.name": "AES256",
        "schema.compatibility": "NONE",
        "topics": "zelda-acq-iready-ca_onboard,zelda-acq-iready-ca_k1_avatar,zelda-acq-iready-irp_staff_member,zelda-acq-iready-ira_assessment_item,zelda-acq-iready-irp_processed_exports,zelda-acq-iready-irpc_book_unit_x_profile,zelda-acq-iready-irp_assignment,zelda-acq-iready-irp_api_oauth_auth_code_scope,zelda-acq-iready-irpc_standard_x_assignable_item,zelda-acq-iready-irp_track,zelda-acq-iready-irp_building_mdr,zelda-acq-iready-irp_auto_scheduling_date,zelda-acq-iready-irp_sba_test_x_reporting_category,zelda-acq-iready-ira_activity_x_test_flow,zelda-acq-iready-irp_sba_mastery,zelda-acq-iready-irp_user_usage_data,zelda-acq-iready-irp_staff_member_school_enrollment,zelda-acq-iready-irp_api_client,zelda-acq-iready-dbmaintain_scripts,zelda-acq-iready-irp_sba_test_grouping,zelda-acq-iready-ira_testlet_item,zelda-acq-iready-irpc_book_series_x_recommendation_vendor,zelda-acq-iready-irp_activity,zelda-acq-iready-etl_deleted_irp_teacher_performance_category_gain,zelda-acq-iready-irp_settings_x_district,zelda-acq-iready-irp_student_group_student_enrollment_api_reference,zelda-acq-iready-irp_product_module,zelda-acq-iready-irp_profile_root,zelda-acq-iready-irpc_normed_scores,zelda-acq-iready-ira_tutorial_item,zelda-acq-iready-irpc_book_unit,zelda-acq-iready-irpc_standard_x_indicator,zelda-acq-iready-ca_onboard_status,zelda-acq-iready-irpc_standard,zelda-acq-iready-irpc_book_x_grade_level,zelda-acq-iready-irpc_progress_monitoring_estimate_lookup,zelda-acq-iready-ira_last_assessment_score,zelda-acq-iready-irp_placement_relative_level,zelda-acq-iready-irpc_pdf_library,zelda-acq-iready-irpc_standard_match_type_order,zelda-acq-iready-irp_settings_x_school,zelda-acq-iready-irp_student_grade_level,zelda-acq-iready-irs_assessment_fact,zelda-acq-iready-irp_student_api_reference,zelda-acq-iready-irpc_pdf_groups_x_profile,zelda-acq-iready-etl_deleted_irp_sba_tgrca,zelda-acq-iready-irp_lesson_placement_logic,zelda-acq-iready-ca_district_account,zelda-acq-iready-ira_question_item,zelda-acq-iready-irp_sba_reporting_category,zelda-acq-iready-ira_assessment_itemresponse,zelda-acq-iready-irp_privilege_x_user_role,zelda-acq-iready-ca_owner_type,zelda-acq-iready-ca_onboard_school,zelda-acq-iready-irp_schedule,zelda-acq-iready-ira_test_flow_bucket,zelda-acq-iready-etl_deleted_irp_student_group_staff_member_enrollment,zelda-acq-iready-irp_print_book,zelda-acq-iready-ca_queued_job_result,zelda-acq-iready-ca_product_license,zelda-acq-iready-etl_deleted_irp_student_group_student_enrollment,zelda-acq-iready-etl_deleted_irp_student,zelda-acq-iready-irp_api_credential_oauth,zelda-acq-iready-irp_school_year_level,zelda-acq-iready-irp_student_group_staff_member_enrollment,zelda-acq-iready-irpc_dev_analysis_text_library,zelda-acq-iready-irp_staff_member_api_reference,zelda-acq-iready-irp_profile_grade_info,zelda-acq-iready-irp_api_credential,zelda-acq-iready-irp_profile_track,zelda-acq-iready-irp_student_group_product_association,zelda-acq-iready-irp_sba_reporting_category_x_standard,zelda-acq-iready-irp_sba_test_grouping_reporting_category_association,zelda-acq-iready-ira_operational_detail_result,zelda-acq-iready-irp_student_group_student_enrollment,zelda-acq-iready-irp_announcement_x_user_role,zelda-acq-iready-irp_placement_input,zelda-acq-iready-irp_academic_year_for_onboard,zelda-acq-iready-irp_auto_scheduling_setting,zelda-acq-iready-lyc_user_role,zelda-acq-iready-irp_instruction_passing_threshold,zelda-acq-iready-irp_user,zelda-acq-iready-ira_test_flow_assessment_bucket_x_assessment,zelda-acq-iready-ca_queued_job_status,zelda-acq-iready-irp_settings_x_student_group,zelda-acq-iready-irp_announcement,zelda-acq-iready-irpc_progress_monitoring_data,zelda-acq-iready-irp_settings_x_acad_yr_x_account,zelda-acq-iready-irpc_indicator_group_x_placement,zelda-acq-iready-irp_settings_x_account,zelda-acq-iready-irp_sba_event,zelda-acq-iready-irp_password_reset_token,zelda-acq-iready-irpc_indicator,zelda-acq-iready-ira_assessment_item_result,zelda-acq-iready-irp_api_oauth_auth_code_param,zelda-acq-iready-irpc_book_series,zelda-acq-iready-ca_k1_picturecode_character,zelda-acq-iready-ira_test_flow_assessment_bucket,zelda-acq-iready-ca_queued_job_outcomes,zelda-acq-iready-etl_deleted_irp_student_group,zelda-acq-iready-lyc_learning_agency,zelda-acq-iready-irp_api_credential_basic,zelda-acq-iready-ira_test_flow_intermission_bucket_x_intermission,zelda-acq-iready-irp_pr_group,zelda-acq-iready-ira_test_flow,zelda-acq-iready-irp_privilege,zelda-acq-iready-health_check,zelda-acq-iready-irp_sba_event_details,zelda-acq-iready-irp_demographic_data,zelda-acq-iready-irp_placement_dimension,zelda-acq-iready-irpc_dev_analysis_text_x_placement,zelda-acq-iready-databasechangeloglock,zelda-acq-iready-ca_buddy,zelda-acq-iready-ira_assessment_item_exposure_count,zelda-acq-iready-irp_assignable_test,zelda-acq-iready-irp_profile,zelda-acq-iready-irp_rti_tier_placement,zelda-acq-iready-irp_recommendation_vendor_x_account,zelda-acq-iready-irp_academic_year,zelda-acq-iready-irp_access_restriction,zelda-acq-iready-irp_lexile_placement,zelda-acq-iready-irs_assessment_category_calc,zelda-acq-iready-irpc_pdf_groups,zelda-acq-iready-ca_background_job,zelda-acq-iready-irp_sba_reporting_category_instructional_pdf_library,zelda-acq-iready-irp_privilege_x_account,zelda-acq-iready-ira_test_flow_bucket_decision,zelda-acq-iready-ira_intermission,zelda-acq-iready-irp_school_api_reference,zelda-acq-iready-ca_background_job_queue,zelda-acq-iready-irpc_book,zelda-acq-iready-irp_api_client_scope,zelda-acq-iready-irp_recommendation_vendor,zelda-acq-iready-irs_assessment_category_fact,zelda-acq-iready-irpc_ccss_mapping,zelda-acq-iready-lyc_learning_institution,zelda-acq-iready-ca_testing_window,zelda-acq-iready-etl_deleted_irp_staff_member,zelda-acq-iready-irpc_admin_tier_lookup,zelda-acq-iready-irp_api_client_oauth,zelda-acq-iready-irp_pr_book,zelda-acq-iready-irp_student_school_enrollment,zelda-acq-iready-irp_api_oauth_auth_code,zelda-acq-iready-irp_settings,zelda-acq-iready-ca_sso_basic_config,zelda-acq-iready-ira_test_flow_track_bucket,zelda-acq-iready-ca_k1_picturecode_character_set,zelda-acq-iready-irp_sba_reporting_category_x_state,zelda-acq-iready-irp_password_strength,zelda-acq-iready-irpc_standard_grade_level,zelda-acq-iready-irp_settings_x_user,zelda-acq-iready-irp_student_group_school_association,zelda-acq-iready-irpc_indicator_group_x_indicator,zelda-acq-iready-etl_deleted_irp_sba_test_grouping,zelda-acq-iready-irp_pr_lesson,zelda-acq-iready-placement_lesson_lookup,zelda-acq-iready-irp_auto_scheduling_x_grade,zelda-acq-iready-irp_student_k1_login_properties,zelda-acq-iready-irp_privilege_x_state,zelda-acq-iready-ira_bucket_track_detail,zelda-acq-iready-irp_student_group_api_reference,zelda-acq-iready-databasechangelog,zelda-acq-iready-irpc_pdf_x_indicator,zelda-acq-iready-irp_student,zelda-acq-iready-ca_theme,zelda-acq-iready-irp_teacher_performance_category_gain,zelda-acq-iready-irpc_indicator_text,zelda-acq-iready-irpc_book_unit_x_indicator,zelda-acq-iready-lyc_grade_level,zelda-acq-iready-irpc_book_series_x_state,zelda-acq-iready-ca_iready_subject,zelda-acq-iready-irp_student_group,zelda-acq-iready-irp_profile_instructional_priority,zelda-acq-iready-irp_student_group_staff_member_enrollment_api_reference,zelda-acq-iready-irp_sba_root_reporting_category,zelda-acq-iready-ira_test_flow_eft_bucket,zelda-acq-iready-irp_ethnicity,zelda-acq-iready-ira_indicator_x_assessment_item,zelda-acq-iready-irp_print_book_series,zelda-acq-iready-irpc_domain_skills_text_x_placement,zelda-acq-iready-irp_activity_datastore_mysql,zelda-acq-iready-irp_student_product_enrollment,zelda-acq-iready-irp_developmental_analysis,zelda-acq-iready-irpc_domain_skills_text_library,zelda-acq-iready-ca_background_process,zelda-acq-iready-ca_school_account,zelda-acq-iready-ira_test_flow_intermission_bucket,zelda-acq-iready-irp_teacher_performance_state_category,zelda-acq-iready-irp_print_book_recommendation_by_placement,zelda-acq-iready-irp_pr_group_lessons,zelda-acq-iready-ira_score_category,zelda-acq-iready-irp_placement_version_log,zelda-acq-iready-ca_queued_background_job,zelda-acq-iready-irp_placement_output,zelda-acq-iready-irp_browser_support,zelda-acq-iready-ca_state,zelda-acq-iready-test_connection_pool,zelda-acq-iready-irp_state_settings,zelda-acq-iready-irp_user_onboard_enrollment,zelda-acq-iready-irp_api_credential_oauth_scope,zelda-acq-iready-ca_state_localization,zelda-acq-iready-ira_assessment_question,zelda-acq-iready-irpc_indicator_group",
        "partitioner.topic.format.regex": "zelda-acq-([\w_]+)-([\w_]+)",
        "partitioner.col.partition": "_p",
        "partitioner.col.batch.id": "_b",
        "transforms.tombstoneFilter.type": "com.cainc.dataplatform.connectors.transforms.TombstoneFilter",
        "value.converter.schema.registry.url": "http://nintendo-schemaregistry-datalake-01:8081",
        "partitioner.class": "com.cainc.dataplatform.connectors.partitioner.DPPartitioner",
        "name": "iready_s3_sink_zelda8",
        "storage.class": "io.confluent.connect.s3.storage.S3Storage",
        "key.converter.schema.registry.url": "http://nintendo-schemaregistry-datalake-01:8081",
        "rotate.schedule.interval.ms": "3600000"
      }
    }
  },
  "connector_types" : {
    "debezium_mysql" : {
      "type" : "source",
      "disp_name" : "Debezium Source Connector",
      "version" : "0.6.2",
      "description" : "Debezium Kafka connector is a MySQL binlog reader which can dispatch change events to Kafka",
    },
    "s3_connector" : {
      "type" : "sink",
      "disp_name" : "S3 Sink Connector",
      "version" : "3.3.0",
      "description" : "S3 connector periodically polls data from Kafka and uploads it to S3",
    }
  }
}

export default connectorData;