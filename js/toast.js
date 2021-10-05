ej.base.enableRipple(true);

//Initialize Toast component

var toast = new ej.notifications.Toast({
    title: 'Toast 1',
    content: 'Saludos 1',
    target: document.body,
    position: { X: 'Left', Y: 'Bottom' },
    click: onClick
});
toast.appendTo('#element');
toast.show();

var toast1 = new ej.notifications.Toast({
    title: 'Toast 2',
    content: 'Saludos 2',
    target: document.body,
    position: { X: 'Left', Y: 'Bottom' },
    click: onClick
});

toast1.appendTo('#element1');
toast1.show();

var toast2 = new ej.notifications.Toast({
    title: 'Toast 3',
    content: 'Saludos 3',
    target: document.body,
    position: { X: 'Left', Y: 'Bottom' },
    click: onClick
});


toast2.appendTo('#element2');
toast2.show();


var toast3 = new ej.notifications.Toast({
    title: 'Toast 4',
    content: 'Saludos 4',
    target: document.body,
    position: { X: 'Left', Y: 'Bottom' },
    click: onClick
});


toast3.appendTo('#element3');
toast3.show();




document.getElementById('show_toast').onclick = function () {
  toast.show();
};

document.getElementById('show_toast1').onclick = function () {
  toast1.show();
};


document.getElementById('show_toast2').onclick = function () {
    toast2.show();
  };

document.getElementById('show_toast3').onclick = function () {
    toast3.show();
  };

function onClick(e ) {
  e.clickToClose = true;
}