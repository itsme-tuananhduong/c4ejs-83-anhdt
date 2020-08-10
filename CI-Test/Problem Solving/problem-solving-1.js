let check = 'y';
while (check == 'y') {
    let n = prompt('Nhập số nguyên n: '),
        first_num = prompt('Nhập chữ số đầu tiên trong dãy: ');
    oppositeInCircleOf(n, first_num);
    check = prompt('Bạn có muốn tiếp tục không? (y/n)');
}

function oppositeInCircleOf(n = 0, first_num = 0) {
    let op_num = first_num + (n / 2);
    alert('The opposite number is: ' + op_num);
}