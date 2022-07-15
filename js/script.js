alert("         Hey Stranger,\n         Thanks for the interest shown!!!")

function renderTime()
{
    // date
    var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000)
        {
            year+=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday")
    var montharray = new Array("January","Feburary","March","April","May","June","July","August","September","October","November","December")
    //date end

    var myClock = document.getElementById("clockDisplay")
    myClock.textContent = "" +dayarray[day] + " "+ daym + " " +montharray[month]+ " "+year
    // myClock.innerText = "" +dayarray[day] + " "+ daym + " " +montharray[month]+ " "+year
    myClock.innerText ="Hyderabad,"+" "+daym+ " "+montharray[month]+ " "+year

    setTimeout("renderTime()", 1000)
}
renderTime();
