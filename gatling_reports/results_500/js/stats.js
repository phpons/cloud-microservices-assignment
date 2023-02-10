var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "7500",
        "ok": "1863",
        "ko": "5637"
    },
    "minResponseTime": {
        "total": "120",
        "ok": "120",
        "ko": "1025"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "58829",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "13263",
        "ok": "13670",
        "ko": "13128"
    },
    "standardDeviation": {
        "total": "11601",
        "ok": "11537",
        "ko": "11618"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "11165",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "21063",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "41534",
        "ok": "37127",
        "ko": "58832"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "45467",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 117,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 60,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 1686,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5637,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "24.84",
        "ko": "75.16"
    }
},
contents: {
"req_root-end-point-1a094": {
        type: "REQUEST",
        name: "root end point",
path: "root end point",
pathFormatted: "req_root-end-point-1a094",
stats: {
    "name": "root end point",
    "numberOfRequests": {
        "total": "7500",
        "ok": "1863",
        "ko": "5637"
    },
    "minResponseTime": {
        "total": "120",
        "ok": "120",
        "ko": "1025"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "58829",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "13263",
        "ok": "13670",
        "ko": "13128"
    },
    "standardDeviation": {
        "total": "11601",
        "ok": "11537",
        "ko": "11618"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "11165",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "21063",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "41534",
        "ok": "37127",
        "ko": "58832"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "45467",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 117,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 60,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 1686,
    "percentage": 22
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5637,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "24.84",
        "ko": "75.16"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
