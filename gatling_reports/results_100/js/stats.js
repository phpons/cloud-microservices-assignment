var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1479",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "43140",
        "ok": "43140",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "3421",
        "ok": "3328",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4424",
        "ok": "4385",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1521",
        "ok": "1497",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "4362",
        "ok": "4225",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "11436",
        "ok": "11452",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "20285",
        "ok": "20316",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 502,
    "percentage": 33
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 120,
    "percentage": 8
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 857,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.412",
        "ok": "29",
        "ko": "0.412"
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
        "total": "1500",
        "ok": "1479",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "43140",
        "ok": "43140",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "3421",
        "ok": "3328",
        "ko": "10000"
    },
    "standardDeviation": {
        "total": "4424",
        "ok": "4385",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1521",
        "ok": "1497",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "4362",
        "ok": "4224",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "11436",
        "ok": "11452",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "20285",
        "ok": "20316",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 502,
    "percentage": 33
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 120,
    "percentage": 8
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 857,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 21,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.412",
        "ok": "29",
        "ko": "0.412"
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
