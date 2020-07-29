function diff(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff = Math.abs(diff);
    if (diff < 60)
        return Math.abs(Math.round(diff));
    else
        if (diff >= 60 && diff < 3600) {
            diff /= (60);
            return Math.abs(Math.round(diff));
        }
        else
            if (diff >= 3600 && diff <= 86400) {

                diff /= (60 * 60);
                return Math.abs(Math.round(diff));
            }
        else{
            diff /= (24*60 * 60);
                return Math.abs(Math.round(diff));
            }
}




dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:12:40");
console.log(diff(dt1, dt2));


