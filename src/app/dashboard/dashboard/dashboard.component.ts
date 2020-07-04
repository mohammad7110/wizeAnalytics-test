import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public form: FormGroup;

    public lineChartData: ChartDataSets[] = [
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'BAD'
        },
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'NORMAL'
        },
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'GOOD'
        }
    ];
    public lineChartLabels: Label[] = ['Ja', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 'March',
                    borderColor: 'orange',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: 'orange',
                        content: 'LineAnno'
                    }
                },
            ],
        },
    };
    public lineChartColors: Color[] = [
        { // grey
            backgroundColor: 'transparent',
            borderColor: '#E6888C',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent'
        },
        { // dark grey
            backgroundColor: 'transparent',
            borderColor: '#FFAF7C',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent'
        },
        { // red
            backgroundColor: 'transparent',
            borderColor: '#2EB5C9',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent'
        }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';
    public lineChartPlugins = [];
    public barChartOptions: ChartOptions = {
        responsive: true,

        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'end',
            }
        }
    };
    public barChartLabels: Label[] = ['Apr10', 'Apr11', 'Apr12', 'Apr13', 'Apr14', 'Apr15', 'Apr16', 'Apr17', 'Apr18', 'Apr19'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartDataSets[] = [
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'BAD', stack: 'a', backgroundColor: '#E6888C'
        },
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'NORMAL', stack: 'a', backgroundColor: '#FFAF7C'
        },
        {
            data: [this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40), this.rand(40),
            this.rand(40), this.rand(40), this.rand(40), this.rand(40)], label: 'GOOD', stack: 'a', backgroundColor: '#2EB5C9'
        }
    ];
    public pieChartOptions: ChartOptions = {
        responsive: true,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            position: 'left',
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    const label = ctx.chart.data.labels[ctx.dataIndex];
                    return label;
                },
            },
        }
    };
    public pieChartLabels: Label[] = [['BAD'], ['NORMAL'], ['GOOD']];
    public pieChartData: number[] = [Math.floor(Math.random() * (30)) + 10, Math.floor(Math.random() * (30)) + 10
        , Math.floor(Math.random() * (30)) + 10];
    public pieChartType: ChartType = 'doughnut';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors = [
        {
            backgroundColor: ['#E6888C', '#FFAF7C', '#2EB5C9'],
        },
    ];



    constructor(
    ) {

    }
    ngOnInit(): void {

    }

    rand(max: number) {
        return Math.floor(Math.random() * (max - 10)) + 10;
    }





}
