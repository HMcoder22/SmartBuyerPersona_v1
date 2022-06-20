export const chart = [{
    type: 'line',
    data: {
        labels: ["Jan 16", "Feb 16", "Mar 16", "April 16", "May 16", "June 16", "July 16", "Aug 16", "Sep 16","Oct 16", "Nov 16", "Dec 16"],
        datasets: [{ 
            label: "Facebook",
            data: [860,1140,1060,1060,1070,1110,1330,2210,2830,2478,3842,3451],
            borderColor: "red",
            backgroundColor: "red",
            fill: false
        }, { 
            label: "Instagram",
            data: [1600,1700,1700,1900,2000,2700,3042,3762,4789,4712,5421,6724],
            borderColor: "green",
            backgroundColor: "green",
            fill: false
        }, { 
            label: "Twitter",
            data: [2372,2789,2893,2891,3762,4726,3326,4621,4891,4312,4782,5429],
            borderColor: "blue",
            backgroundColor: "blue",
            fill: false
        }]
    },
    options:{
        legend: {
            display: true

        }
    },
    label: "Social media clicks every month"
},{
    type: "bar",
    data: {
        labels: ["Visitors Type"],
        datasets: [{ 
            label: "New Visitors",
            data: [1100],
            borderColor: "blue",
            backgroundColor: "blue",
        }, { 
            label: "Returning visitors",
            data: [872],
            borderColor: "red",
            backgroundColor: "red",
        }]
    },
    options: {
        legend: {
            display: true,
        },
        scales: {
            x: {
                display: false
            }
        },
        maintainAspectRatio: false,
        responsive: true
    },
    label: 'Visitors Type'
},
{
    type: "bar",
    data: {
      labels: ["Category"],
      datasets: [{ 
        label: "Pearl",
        data: [1100],
        borderColor: "blue",
        backgroundColor: "blue",
      }, { 
        label: "Necklace",
        data: [972],
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ring",
        data: [400],
        borderColor: "darkblue",
        backgroundColor: "darkblue"
      }]
    },
    options: {
      legend: {
          display: true,
      },
      scales: {
          x: {
              display: false
          }
      },
      maintainAspectRatio: false,
      responsive: true
    },
    label: 'Top 3 pages'
},
{
    type: "bar",
    data: {
      labels: ["Jan 16", "Feb 16", "Mar 16", "April 16", "May 16", "June 16", "July 16", "Aug 16", "Sep 16","Oct 16", "Nov 16", "Dec 16"],
      datasets: [{ 
        label: "Social",
        data: [860,1140,1060,1060,1070,1110,1330,3210,4830,4478,3582, 3972],
        borderColor: "red",
        backgroundColor: "darkblue"
      }, { 
        label: "Overall",
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000, 6528, 6281],
        borderColor: "green",
        backgroundColor: "darkred"
      }]
    },
    options: {
      legend: {
          display: true,
      }
    },
    label: 'Sale distribution'
},
{
    type: "line",
    data: {
      labels: ["Jan 16", "Feb 16", "Mar 16", "April 16", "May 16", "June 16", "July 16", "Aug 16", "Sep 16","Oct 16", "Nov 16", "Dec 16"],
      datasets: [{ 
        label: "Facebook",
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
        borderColor: 'red',
        backgroundColor: "red"
      }, { 
        label: "Instagram",
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: 'green',
        backgroundColor: "green",
      }, { 
        label: "Twitter",
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        backgroundColor: "blue",
        borderColor: 'blue',
      }]
    },
    options: {
      legend: {
          display: true,
      }
    },
    label: 'Sales resulting from social media and web traffic'
}]
