class Validation {
    constructor() {
        this.billing_details();
    }

    billing_details() {
        let valid = true;
        $(".continue").click(function () {
            let username = document.getElementById("username").value;
            let card = document.getElementById("cardnumber").value;
            let expr = document.getElementById("expiry").value;
            let serial = document.getElementById("cvc").value;
            let cardRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
            let exprCardRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
            let serialReg = /^[0-9]{3}$/;

            /* Name of Card User */
            if ($("#username").val() == "") {
                $("#username").addClass("is-invalid");
                $("#username").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#username', {
                    title: "Email cannot be blank"
                })

                valid = false;

            } else {
                $("#username").removeClass("is-invalid");
                $("#username").addClass("is-valid");

                if ($("#username").tooltip != undefined) {
                    $("#username").tooltip("dispose");
                }
            }

            /* Card Details*/
            if (cardRegEx.test(card)) {
                document.getElementById('validCardNum').innerHTML = "<span style='color: green;'>Valid Card</span>";

                $("#cardnumber").removeClass("is-invalid");
                $("#cardnumber").addClass("is-valid");

                if ($("#cardnumber").tooltip != undefined) {
                    $("#cardnumber").tooltip("dispose");
                }
            } else if ($("#cardnumber").val() == "") {
                $("#cardnumber").addClass("is-invalid");
                $("#cardnumber").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#cardnumber', {
                    title: "Email cannot be blank"
                })

                valid = false;
            } else {
                document.getElementById('validCardNum').innerHTML = "<span style='color: red;'>Invalid Card - Please try again/Use of space is not allowed</span>";

                valid = false;
            }

            /* Expiring Date */
            if (exprCardRegEx.test(expr)) {
                document.getElementById('validExpiry').innerHTML = "<span style='color: green;'>Valid</span>";

                $("#expiry").removeClass("is-invalid");
                $("#expiry").addClass("is-valid");

                if ($("#expiry").tooltip != undefined) {
                    $("#expiry").tooltip("dispose");
                }
            } else if ($("#expiry").val() == "") {
                $("#expiry").addClass("is-invalid");
                $("#expiry").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#expiry', {
                    title: "Email cannot be blank"
                })

                valid = false;
            } else {
                document.getElementById('validExpiry').innerHTML = "<span style='color: red;'>Invalid - Correct format: 09/21</span>";

                valid = false;
            }

            /* Serial Num */
            if (serialReg.test(serial)) {
                document.getElementById('validSerialNum').innerHTML = "<span style='color: green;'>Valid</span>";

                $("#cvc").removeClass("is-invalid");
                $("#cvc").addClass("is-valid");

                if ($("#cvc").tooltip != undefined) {
                    $("#cvc").tooltip("dispose");
                }
            } else if ($("#cvc").val() == "") {
                $("#cvc").addClass("is-invalid");
                $("#cvc").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#cvc', {
                    title: "Email cannot be blank"
                })

                valid = false;
            } else {
                document.getElementById('validSerialNum').innerHTML = "<span style='color: red;'>Invalid - Required: 3 Numbers and cannot be letters</span>";
                
                valid = false;
            }
            return valid;
            
        })

    }
}

let validation = new Validation();