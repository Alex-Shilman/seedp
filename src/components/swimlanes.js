
const swimlanesData = {
    "swimlanes" : [
      {
        "sourceConnectorKey" : "iready_dbz",
        "topicGroupKey" : "acq-iready",
        "sinkConnectorKey" : "iready_s3_sink",
        "status" : "OK",
        "warnMessage" : null
      },
      {
        "sourceConnectorKey" : "lesson_dbz",
        "topicGroupKey" : "acq-lesson",
        "sinkConnectorKey" : "lesson_s3_sink",
        "status" : "WARNING",
        "warnMessage" : "The following topics are not being read by sink connector: [acq-lesson-topic2, acq-lesson-topic3]"
      },
      {
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
    }
  };

export default swimlanesData;