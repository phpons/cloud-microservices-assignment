var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "150",
        "ok": "0",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "112",
        "ok": "-",
        "ko": "112"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "percentiles1": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "percentiles2": {
        "total": "51",
        "ok": "-",
        "ko": "51"
    },
    "percentiles3": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles4": {
        "total": "83",
        "ok": "-",
        "ko": "83"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 150,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
        "total": "150",
        "ok": "0",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "112",
        "ok": "-",
        "ko": "112"
    },
    "meanResponseTime": {
        "total": "49",
        "ok": "-",
        "ko": "49"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "-",
        "ko": "8"
    },
    "percentiles1": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "percentiles2": {
        "total": "51",
        "ok": "-",
        "ko": "51"
    },
    "percentiles3": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles4": {
        "total": "83",
        "ok": "-",
        "ko": "83"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 150,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
