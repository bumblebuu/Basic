function greatingButton_ClickHandler() {
    var nodeNameTextBox = document.querySelector('#txtName');
    var nodeAgeNumBox = document.querySelector('#nudAge');
    var nodeFiuRadioButton = document.querySelector('#rFiu');

    var name = nodeNameTextBox.value
    var Age = parseInt(nodeAgeNumBox.value);
    var isBoy = nodeFiuRadioButton.checked;
    var udvozles = ' ';


    if (Age < 18) {
        udvozles = 'Szia ' + name + '!';
    } else {
        if (isBoy == true) {
            udvozles = 'Jó napot ' + name + ' bácsi!';
        } else {
            udvozles = 'Csókolom ' + name + ' néni!';
        }
    }

    alert(udvozles);
    var nodeGenderComboBox = document.querySelector('#cmbGender');
    var gender = nodeGenderComboBox.value;

}

function AllatOrvosiLo() {
    // var nodeGenderComboBox = document.querySelector('#cmbGender');
    // var gender = nodeGenderComboBox.value;
    var nodesRadioButton = document.querySelectorAll('INPUT[name=milegyen]');
    for (var i = 0; i < nodesRadioButton.length; i++) // elöltesztelő ismert lépésszámú ciklus
    {
        if (nodesRadioButton[i].checked == true) {
            alert(nodesRadioButton[i].value);
        }
    }
}