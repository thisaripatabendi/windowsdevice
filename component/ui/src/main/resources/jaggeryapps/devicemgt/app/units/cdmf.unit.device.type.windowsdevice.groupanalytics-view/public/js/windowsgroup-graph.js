
 /*
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var palette = new Rickshaw.Color.Palette({scheme: "classic9"});
var sensorType1 = "windowsbatterylevel";
var sensorType2 = "windowsbatterystatus";
//cpuusage
var sensorType3 = "windowscpuusage";
var sensorType4 = "windowsmemoryspace";
var sensorType5 = "windowsdiskspace";
var sensorType6 = "windowsloadaverage";
var sensorType1Graph;
var sensorType2Graph;
//cpuusage
var sensorType3Graph;
var sensorType4Graph;
var sensorType5Graph;
var sensorType6Graph;

function drawGraph_windowsdevice(from, to)
{
    var devices = $("#details").data("devices");
    var tzOffset = new Date().getTimezoneOffset() * 60;
    var chartWrapperElmId = "#chartDivSensorType1";
    var graphWidth = $(chartWrapperElmId).width() - 50;

    console.log("b4 calling the getGraphConfig");

    //graph1
    var chart1 = "chartSensorType1";
    var backendApiUrl1 = $("#" + chart1 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType1;
    var successCallback = function (data) {
        dataset = JSON.parse(data);

        // graph1
        var graphConfigSensorType1 = getGraphConfig(dataset, sensorType1, "chartSensorType1");
        sensorType1Graph = new Rickshaw.Graph(graphConfigSensorType1);
        drawGraph(sensorType1Graph, "sensorType1yAxis", "sensorType1Slider", "sensorType1Legend", sensorType1
            , graphConfigSensorType1, "chartSensorType1");

    };

    invokerUtil.get(backendApiUrl1, successCallback, function (message) {
        console.log(message);
    });

    //graph2
    var chart2 = "chartSensorType2";
    var backendApiUrl2 = $("#" + chart2 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType2;
    var successCallback2 = function (data) {
        dataset = JSON.parse(data);

        //graph2
        var graphConfigSensorType2 = getGraphConfig(dataset, sensorType2, "chartSensorType2");
        sensorType2Graph = new Rickshaw.Graph(graphConfigSensorType2);
        drawGraph(sensorType2Graph, "sensorType2yAxis", "sensorType2Slider", "sensorType2Legend", sensorType2
            , graphConfigSensorType2, "chartSensorType2");

    };

    invokerUtil.get(backendApiUrl2, successCallback2, function (message) {
        console.log(message);
    });

    //graph3
    var chart3 = "chartSensorType3";
    var backendApiUrl3 = $("#" + chart3 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType3;
    var successCallback3 = function (data) {
        dataset = JSON.parse(data);

        //graph3
        var graphConfigSensorType3 = getGraphConfig(dataset, sensorType3, "chartSensorType3");
        sensorType3Graph = new Rickshaw.Graph(graphConfigSensorType3);
        drawGraph(sensorType3Graph, "sensorType3yAxis", "sensorType3Slider", "sensorType3Legend", sensorType3
            , graphConfigSensorType3, "chartSensorType3");

    };

    invokerUtil.get(backendApiUrl3, successCallback3, function (message) {
        console.log(message);
    });

    //graph4
    var chart4 = "chartSensorType4";
    var backendApiUrl4 = $("#" + chart4 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType4;
    var successCallback4 = function (data) {
        dataset = JSON.parse(data);

        //graph3
        var graphConfigSensorType4 = getGraphConfig(dataset, sensorType4, "chartSensorType4");
        sensorType4Graph = new Rickshaw.Graph(graphConfigSensorType4);
        drawGraph(sensorType4Graph, "sensorType4yAxis", "sensorType4Slider", "sensorType4Legend", sensorType4
            , graphConfigSensorType4, "chartSensorType4");

    };

    invokerUtil.get(backendApiUrl4, successCallback4, function (message) {
        console.log(message);
    });

    //graph5
    var chart5 = "chartSensorType5";
    var backendApiUrl5 = $("#" + chart5 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType5;
    var successCallback5 = function (data) {
        dataset = JSON.parse(data);

        //graph5
        var graphConfigSensorType5 = getGraphConfig(dataset, sensorType5, "chartSensorType5");
        sensorType5Graph = new Rickshaw.Graph(graphConfigSensorType5);
        drawGraph(sensorType5Graph, "sensorType5yAxis", "sensorType5Slider", "sensorType5Legend", sensorType5
            , graphConfigSensorType5, "chartSensorType5");

    };

    invokerUtil.get(backendApiUrl5, successCallback5, function (message) {
        console.log(message);
    });

    //graph6
    var chart6 = "chartSensorType6";
    var backendApiUrl6 = $("#" + chart6 + "").data("backend-api-url") + "?from=" + from + "&to=" + to
            + "&sensorType=" + sensorType6;
    var successCallback6 = function (data) {
        dataset = JSON.parse(data);

        //graph6
        var graphConfigSensorType6 = getGraphConfig(dataset, sensorType6, "chartSensorType6");
        sensorType6Graph = new Rickshaw.Graph(graphConfigSensorType6);
        drawGraph(sensorType6Graph, "sensorType6yAxis", "sensorType6Slider", "sensorType6Legend", sensorType6
            , graphConfigSensorType6, "chartSensorType6");

    };

    invokerUtil.get(backendApiUrl6, successCallback6, function (message) {
        console.log(message);
    });

    function getGraphConfig(dataset, sensorType, placeHolder) {
        return {

            element: document.getElementById(placeHolder),
            width: graphWidth,
            height: 400,
            strokeWidth: 2,
            renderer: 'line',
            //interpolation: "linear",
            unstack: true,
            stack: false,
            xScale: d3.time.scale(),
            padding: {top: 0.2, left: 0.02, right: 0.02, bottom: 0.2},
            series: generateArray(dataset, sensorType, placeHolder)
        }
    };


    function generateArray(data, sensorType, placeHolder){

        DeviceidsANDcolors = [];

        var placeHolder = placeHolder;

        var dataset = [];
        dataset = data;

        Deviceids = new Array();
        DeviceNames = new Array();
        timeforXAxis = new Array();
        maxCountForXAxis = 0;

        var devicesArray = new Array();

        for (var i = 0 ; i < dataset.length ; i++){
            var temp = dataset[i];

            if (! Deviceids.includes(temp.values.meta_deviceId)){
                Deviceids.push(temp.values.meta_deviceId);
            }

            if (! DeviceNames.includes(temp.values.meta_deviceName)){
                DeviceNames.push(temp.values.meta_deviceName);
            }

            if(! timeforXAxis.includes(temp.values.meta_time)){
                timeforXAxis.push(temp.values.meta_time);
                maxCountForXAxis ++;
            }

        }

        var series = [];


        for (var d = 0 ; d < Deviceids.length ; d++){

            var device = [];

            for (var z = 0 ; z < dataset.length ; z++){

                var deviceid = dataset[z].values.meta_deviceId;
                var time = (dataset[z].values.meta_time)/1000;

                var value;
                if (placeHolder == "chartSensorType1"){
                    value = dataset[z].values.windowsbatterylevel;
                }else if (placeHolder == "chartSensorType2"){
                    value = dataset[z].values.windowsbatterystatus;
                }else if (placeHolder == "chartSensorType3"){
                    value = dataset[z].values.windowscpuusage;
                }else if (placeHolder == "chartSensorType4"){
                    value = dataset[z].values.windowsmemoryspace;
                }else if (placeHolder == "chartSensorType5"){
                    value = dataset[z].values.windowsdiskspace;
                }else{
                    value = dataset[z].values.windowsloadaverage;
                }

                value = parseFloat(value);value;

                if (deviceid == Deviceids[d]){
                    var xyvalues = {x: time, y: value};
                    device.push(xyvalues);
                }

            }

            series.push({
                color: getRandomColor(),
                data: device,
                name: DeviceNames[d]
            });

        }

        return series;

    }


    function drawGraph(graph, yAxis, slider, legend, sensorType, graphConfig, chart) {
        console.log("1");
        graph.render();
        var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph
        });
        xAxis.render();
        var yAxis = new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'left',
            element: document.getElementById(yAxis),
            width: 40,
            height: 410
        });
        yAxis.render();
        var slider = new Rickshaw.Graph.RangeSlider.Preview({
            graph: graph,
            element: document.getElementById(slider)
        });
        var legend = new Rickshaw.Graph.Legend({
            graph: graph,
            element: document.getElementById(legend)
        });
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function (series, x, y) {
                var date = '<span class="date">' +
                    moment.unix((x + tzOffset) * 1000).format('Do MMM YYYY h:mm:ss a') + '</span>';
                var swatch = '<span class="detail_swatch" style="background-color: ' +
                    series.color + '"></span>';
                return swatch + series.name + ": " + parseInt(y) + '<br>' + date;
            }
        });
        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
            graph: graph,
            legend: legend
        });
        var order = new Rickshaw.Graph.Behavior.Series.Order({
            graph: graph,
            legend: legend
        });
        var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
            graph: graph,
            legend: legend
        });
        var deviceIndex = 0;
        console.log("1");

    }

    function getRandomColor() {

        var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return color;
    }


}
