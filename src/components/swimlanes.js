
const swimlanesData = {
    "swimlanes" : [
      {
        "databaseKey" : "zelda-slave-debezium-01_iready",
        "sourceConnectorKey" : "iready_dbz",
        "topicGroupKey" : "acq-iready",
        "sinkConnectorKey" : "iready_s3_sink",
        "status" : "OK",
        "warnMessage" : null
      },
      {
      "databaseKey" : "navi-slave-debezium-01_lesson",
        "sourceConnectorKey" : "lesson_dbz",
        "topicGroupKey" : "acq-lesson",
        "sinkConnectorKey" : "lesson_s3_sink",
        "status" : "WARNING",
        "warnMessage" : "The following topics are not being read by sink connector: [acq-lesson-topic2, acq-lesson-topic3]"
      },
      {
      "databaseKey" : null,
        "sourceConnectorKey" : null,
        "topicGroupKey" : "htdc-other",
        "sinkConnectorKey" : null,
        "status" : "OK",
        "warnMessage" : null
      }
    ],
    "connectors" : {
      "iready_dbz" : {
        "dispName" : "iready_dbz",
        "type" : "source",
      },
      "lesson_dbz" : {
        "dispName" : "lesson_dbz",
        "type" : "source",
      },
      "iready_s3_sink" : {
        "dispName" : "iready_s3_sink",
        "type" : "sink",
      },
      "lesson_s3_sink" : {
        "dispName" : "lesson_s3_sink",
        "type" : "sink",
      }
    },
    "topicGroups" : {
      "acq-iready" : {
        "dispName" : "acq-iready",
        "topics" : [
          "acq-iready-topic1",
          "acq-iready-topic2",
          "acq-iready-topic3",
          "acq-iready-topic4"
        ]
      },
      "acq-lesson" : {
        "dispName" : "acq-lesson",
        "topics" : [
          "acq-lesson-topic1",
          "acq-lesson-topic2",
          "acq-lesson-topic3",
          "acq-lesson-topic4"
        ]
      },
      "htdc-other" : {
        "dispName" : "HTDC / other",
        "topics" : [
          "htdc-topic1",
          "htdc-topic2",
          "random-topic1"
        ]
      }
    },
    "databases" : {
      "zelda-slave-debezium-01_iready" : {	
        "host" : "zelda-slave-debezium-01",
        "name" : "iready"
      },
      "navi-slave-debezium-01_lesson" : {	
        "host" : "navi-slave-debezium-01",
        "name" : "lesson"
      }
    }
};

export default swimlanesData;