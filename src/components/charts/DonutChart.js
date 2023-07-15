import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useNavigate  } from 'react-router-dom';

const DonutChart = ({ items }) => {
    const chartRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const updateChartLabels = () => {
            if (chartRef.current) {
                const chart = chartRef.current.chart;

                // Remove existing labels
                chart.renderer.box.parentNode.querySelectorAll('.custom-chart-label').forEach((label) => {
                    label.parentNode.removeChild(label);
                });

                // Calculate the center position of the chart
                const centerX = chart.plotWidth / 2 + chart.plotLeft;
                const centerY = chart.plotHeight / 2 + chart.plotTop;

                // Add the custom text inside the chart
                const textLines = ['360°', 'Diagnostics', '365 Days'];
                const lineHeight = 20; // Adjust the line height as needed
                const totalHeight = lineHeight * textLines.length;
                const startY = centerY - totalHeight / 2;

                // Adjust the startX position based on the available width within the chart
                const chartWidth = chart.plotWidth;
                const availableWidth = chartWidth - 20; // Leave some padding on the sides
                const textWidth = totalHeight; // Assuming each line has the same width
                const startX = Math.max(centerX - textWidth / 2, chart.plotLeft + 10);
                const endX = Math.min(startX + textWidth, chart.plotLeft + availableWidth - 10);

                textLines.forEach((line, index) => {
                    let label;
                    if (index === 2) {
                        // Display "365 Days" in one line
                        label = chart.renderer.text(line, startX, startY + 20 + index * lineHeight, true);
                    } else {
                        // Display other lines as usual
                        label = chart.renderer.text(line, startX, startY + 20 + index * lineHeight);
                    }

                    label
                    .addClass('custom-chart-label')
                        .css({
                            color: '#000',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            width: endX - startX + 'px',
                        })
                        .attr({
                            zIndex: 999,
                        })
                        .add();

                    // Center the label horizontally
                    const labelWidth = label.getBBox().width;
                    label.attr({
                        x: startX + (endX - startX - labelWidth) / 2,
                    });
                });
            }
        };

        const chart = chartRef.current.chart;
        if (chart) {
            // Update chart labels when the chart is redrawn
            chart.update({ chart: { events: { redraw: updateChartLabels } } });
        }

        updateChartLabels();

        window.addEventListener('resize', updateChartLabels);
        return () => {
            window.removeEventListener('resize', updateChartLabels);
        };
    }, [items]);



    const handleChartItemClick = (event) => {
        // Get the clicked item's name
        const itemName = event.point.name;

        // Perform any logic based on the clicked item

        // Example: Open respective component based on the clicked item
        if (itemName === 'MRI') {
            navigate('/MRI');
        } else if (itemName === 'Menu2') {
            console.log('ABC2');
        } else if (itemName === 'Menu3') {
            console.log('ABC3');
        }
        // ... and so on
    };

    const options = {
        chart: {
            backgroundColor: '#19A5A0 !important',
            type: 'pie',
        },
        title: {
            text: null,
        },
        tooltip: {
            pointFormat: '<b></b>',
          },
        plotOptions: {
            pie: {
                innerSize: '50%',
                size:'110%',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    distance: -50, // Adjust the distance of labels from the center
                    style: {
                        textOutline: 'none',
                        color: 'black',
                        fontSize: '12px',
                        textAlign: 'center',
                    },
                },
                events: {
                    click: handleChartItemClick,
                    load: function () {
                        var center = this.series[0].center;

                        this.renderer.circle(
                            center[0],
                            center[1],
                            (this.plotHeight - this.spacingBox.y * 2) / 2)
                            .attr({
                                fill: 'green'
                            }).add();
                    }
                },
            },
            // tooltip: {
            //     pointFormat: '<b>{point.name}</b>', // Disable tooltip for each data point
            // },
        },
        series: [
            {
                name: 'Items',
                data: items.map((item) => ({
                    name: item,
                    y: 1,
                })),
            },
        ],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} allowChartUpdate={true} />
    );
};

export default DonutChart;
