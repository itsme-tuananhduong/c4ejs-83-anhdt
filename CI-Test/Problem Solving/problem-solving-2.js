let check = 'y';
while (check == 'y') {
    let s1 = prompt('Nhập vào xâu thứ nhất: '),
        s2 = prompt('Nhập vào xâu thứ hai: ');
    combineStrings(s1, s2);
    check = prompt('Bạn có muốn tiếp tục không? (y/n)').toLowerCase();
}

function combineStrings(s1, s2) {
    if (s1.length < s2.length) {
        var smin = s1.split(''),
            smax = s2.split(''),
            min = smin.length;
    }
    else {
        var smin = s2.split(''),
            smax = s1.split(''),
            min = smin.length;
    }
    let s3 = '';
    for (let i = 0; i < min; i++) {
        s3 += smin[i];
        s3 += smax[i];
    }
    temp = smax.splice(min, smax.length - 1).join("");
    console.log(temp)
    s3 += temp;
    alert(s3);
}