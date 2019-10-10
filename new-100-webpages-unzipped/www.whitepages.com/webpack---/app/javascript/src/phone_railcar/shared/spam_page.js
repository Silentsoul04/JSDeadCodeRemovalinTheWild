import WPR from 'wpr-helpers';
import scriptLoader from 'load-script';

const GRAPH_ID = '#call-activity-map';

var points = undefined;
var label = undefined;
var color = undefined;

scriptLoader(
    'https://www.gstatic.com/charts/loader.js', {
        async: false
    },
    function() {
        $(function() {
            $('.text-me-form').on('submit', function() {
                if (WPR.empty_field_validation($(this))) {
                    var afterSubmit = $(this).find('.text-me-form-submit');
                    var formTags = $(this).find('.text-me-tags');
                    afterSubmit.removeClass('hide');
                    afterSubmit.addClass('in');
                    formTags.addClass('hide');

                    afterSubmit.find('a').on('click', function() {
                        formTags.removeClass('hide');
                        formTags.addClass('in');
                        afterSubmit.addClass('in');
                        afterSubmit.addClass('hide');
                        return false;
                    });
                } else {
                    event.preventDefault();
                }
            });

            $(window).on('resize', loadData);
            $('#spam-container').on('shown.bs.collapse', loadData);
        });

        function validPointData(data) {
            if (data == undefined) {
                return false;
            }
            return true;
        }

        function loadData() {
            var graphEle = $(GRAPH_ID);
            var callActivityPoints = graphEle.data('call-activity-points');
            if (validPointData(callActivityPoints)) {
                if (points === undefined) {
                    points = callActivityPoints
                        .map(function(value) {
                            var d = new Date(value[0]);
                            d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
                            return [d, value[1]];
                        })
                        .sort(function(a, b) {
                            return a[0] - b[0];
                        });
                    label = graphEle.data('count-label');
                    color = graphEle.data('graph-color');
                }
                // old
                $('.module.call-activity').removeClass('hide');
                $('.module.call-activity').addClass('in');
                // new
                $('.activity-title').show();
                drawChart(points, label, color);
            }
        }

        function drawChart(points, label, color) {
            if (points != undefined) {
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Date');
                data.addColumn('number', label);
                data.addRows(points);

                var elem = $(GRAPH_ID);
                var options = {
                    curveType: 'none',
                    legend: {
                        position: 'none'
                    },
                    chartArea: {
                        width: '95%',
                        height: '75%',
                        top: '0',
                        left: '0'
                    },
                    colors: [color],
                    hAxis: {
                        textPosition: 'none',
                        title: elem.data('xaxis')
                    },
                    vAxis: {
                        format: 'short',
                        textPosition: 'none',
                        viewWindow: {
                            min: 0
                        }
                    },
                    fontName: 'Roboto'
                };

                var chart = new google.visualization.LineChart(elem.get(0));

                chart.draw(data, options);
                if ($('#search-details')) {
                    $('#search-details')
                        .css({
                            opacity: 0,
                            visibility: 'visible'
                        })
                        .animate({
                            opacity: 1
                        }, 800);
                }
            }
        }

        google.charts.load('current', {
            packages: ['corechart']
        });
        google.charts.setOnLoadCallback(loadData);
    }
);