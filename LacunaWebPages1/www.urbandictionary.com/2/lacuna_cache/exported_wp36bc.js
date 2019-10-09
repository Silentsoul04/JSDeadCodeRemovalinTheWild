//<![CDATA[
var chart = document.getElementById('chart');

if (chart) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    c3.generate({
        size: {
            height: 200
        },
        padding: {
            left: 10,
            right: 10
        },
        data: {
            x: 'x',
            columns: JSON.parse(chart.getAttribute('data-monthly-activity')),
            type: 'bar'
        },
        tooltip: {
            contents: function (data, defaultTitleFormat, defaultValueFormat, color) {
                return "<table class=\"c3-tooltip\"><tr><td>" + months[data[0].x.getMonth()] + " " + data[0].x.getFullYear() + "</td></tr></table>";
            }
        },
        grid: {
            x: {
                show: false
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    count: 2,
                    show: false,
                    format: "%Y",
                    outer: false
                }
            },
            y: {
                show: false
            }
        },
        legend: {
            show: false
        },
        bar: {
            width: 1
        }
    });
}
//]]>