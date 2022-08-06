class Validation {
    constructor() {
        this.card_details();
        this.billing_details();
        this.shipping_details();
    }

    card_details() {
        var valid = true;
        $(".verify").click(function () {

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

                valid = true;
            }

            /* Card Details*/
            if (cardRegEx.test(card)) {
                document.getElementById('validCardNum').innerHTML = "<span style='color: green;'>Valid Card</span>";

                $("#cardnumber").removeClass("is-invalid");
                $("#cardnumber").addClass("is-valid");

                if ($("#cardnumber").tooltip != undefined) {
                    $("#cardnumber").tooltip("dispose");
                }

                valid = true;
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

                valid = true;
            } else if ($("#expiry").val() == "") {
                $("#expiry").addClass("is-invalid");
                $("#expiry").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#expiry', {
                    title: "Cannot be blank"
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

                valid = true;
            } else if ($("#cvc").val() == "") {
                $("#cvc").addClass("is-invalid");
                $("#cvc").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#cvc', {
                    title: "Serial number cannot be blank"
                })

                valid = false;
            } else {
                document.getElementById('validSerialNum').innerHTML = "<span style='color: red;'>Invalid - Required: 3 Numbers and cannot be letters</span>";
                
                valid = false;
            }

            if(valid == true ) {
                $('.nav-pills .active').parent().next('li').find('button').trigger('click');
            }

            return valid;
            
        });
    }

    billing_details() {
        $(".verify2").click(function () {
            let validTwo = true;

            let email = document.getElementById('email').value;
            let add = document.getElementById('address').value;
            let add2 = document.getElementById('address2').value;
            let phone = document.getElementById('phone-number').value;
            let country = document.getElementById('country').value;
            let city = document.getElementById('city').value;
            let province = document.getElementById('province').value;
            let zip = document.getElementById('zip').value;
            let emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let phoneReg = /^(\d{3}[-\s]??\d{3}[-\s]?\d{4})$/;
            let cityReg = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
            let provinceReg = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
            let zipReg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

            /* First Name */
            if($("#first-name").val() == "") {
                $("#first-name").addClass("is-invalid");
                $("#first-name").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#first-name', {
                    title: "First name cannot be blank"
                })

                validTwo = false;
            } else {
                $("#first-name").removeClass("is-invalid");
                $("#first-name").addClass("is-valid");

                if ($("#first-name").tooltip != undefined) {
                    $("#first-name").tooltip("dispose");
                }
                validTwo = true;
            }

            /* Last Name */
            if($("#last-name").val() == "") {
                $("#last-name").addClass("is-invalid");
                $("#last-name").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#last-name', {
                    title: "Last name cannot be blank"
                })

                validTwo = false;
            } else {
                $("#last-name").removeClass("is-invalid");
                $("#last-name").addClass("is-valid");

                if ($("#last-name").tooltip != undefined) {
                    $("#last-name").tooltip("dispose");
                }

                validTwo = true;
            }

            /* Email */ 

            if($("#email").val() == "") {
                $("#email").addClass("is-invalid");
                $("#email").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#email', {
                    title: "Email cannot be blank"
                })

                validTwo = false;
            } else if (!emailReg.test(email)) {
                $("#email").addClass("is-invalid");
                document.getElementById('valid-email').innerHTML = "<span style='color: red;'>Email is invalid</span>";
                validTwo = false;
            } else {
                $("#email").removeClass("is-invalid");
                $("#email").addClass("is-valid");

                if ($("#email").tooltip != undefined) {
                    $("#email").tooltip("dispose");
                }
                document.getElementById('valid-email').innerHTML = "<span style='color: green;'>Valid</span>";       
                
                validTwo = true;
            }

            /* Address 1 */

            if($("#address").val() == "") {
                $("#address").addClass("is-invalid");
                $("#address").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#address', {
                    title: "Address cannot be blank"
                })

                validTwo = false;
            } else {
                $("#address").removeClass("is-invalid");
                $("#address").addClass("is-valid");

                if ($("#address").tooltip != undefined) {
                    $("#address").tooltip("dispose");
                }

                validTwo = true;
            }

            /* Phone */

            if($("#phone-number").val() == "") {
                $("#phone-number").addClass("is-invalid");
                $("#phone-number").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#phone-number', {
                    title: "Phone number cannot be blank"
                })

                validTwo = false;
            } else if (!phoneReg.test(phone)) {
                $("#phone-number").addClass("is-invalid");
                document.getElementById('valid-phone').innerHTML = "<span style='color: red;'>Invalid Phone Number</span>";
                validTwo = false;
            } else {
                $("#phone-number").removeClass("is-invalid");
                $("#phone-number").addClass("is-valid");

                if ($("#phone-number").tooltip != undefined) {
                    $("#phone-number").tooltip("dispose");
                }
                document.getElementById('valid-phone').innerHTML = "<span style='color: green;'>Valid</span>"; 

                validTwo = true;
            }

            /* Country */

            if($("#country").val() == "") {
                $("#country").addClass("is-invalid");
                $("#country").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#country', {
                    title: "Country cannot be blank"
                })

                validTwo = false;
            } else {
                $("#country").removeClass("is-invalid");
                $("#country").addClass("is-valid");

                if ($("#country").tooltip != undefined) {
                    $("#country").tooltip("dispose");
                }    
                
                validTwo = true;
            }

            /* City */ 
            
            if($("#city").val() == "") {
                $("#city").addClass("is-invalid");
                $("#city").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#city', {
                    title: "City cannot be blank"
                })

                validTwo = false;
            } else if (!cityReg.test(city)) {
                $("#city").addClass("is-invalid");
                document.getElementById('valid-city').innerHTML = "<span style='color: red;'>Invalid City</span>";
                validTwo = false;
            } else {
                $("#city").removeClass("is-invalid");
                $("#city").addClass("is-valid");

                if ($("#city").tooltip != undefined) {
                    $("#city").tooltip("dispose");
                }
                document.getElementById('valid-city').innerHTML = "<span style='color: green;'>Valid</span>"; 
                
                validTwo = true;
            }

            /* Province */

            if($("#province").val() == "") {
                $("#province").addClass("is-invalid");
                $("#province").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#province', {
                    title: "Province cannot be blank"
                })

                validTwo = false;
            } else if (!provinceReg.test(province)) {
                $("#province").addClass("is-invalid");
                document.getElementById('valid-province').innerHTML = "<span style='color: red;'>Invalid Province</span>";
                validTwo = false;
            } else {
                $("#province").removeClass("is-invalid");
                $("#province").addClass("is-valid");

                if ($("#province").tooltip != undefined) {
                    $("#province").tooltip("dispose");
                } 
                document.getElementById('valid-province').innerHTML = "<span style='color: green;'>Valid</span>";

                validTwo = true;
            }

            /* ZIP */

            if($("#zip").val() == "") {
                $("#zip").addClass("is-invalid");
                $("#zip").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#zip', {
                    title: "ZIP cannot be blank"
                })

                validTwo = false;
            } else if (!zipReg.test(zip)) {
                $("#zip").addClass("is-invalid");
                document.getElementById('valid-zip').innerHTML = "<span style='color: red;'>Invalid ZIP Code</span>";
                validTwo = false;
            } else {
                $("#zip").removeClass("is-invalid");
                $("#zip").addClass("is-valid");

                if ($("#zip").tooltip != undefined) {
                    $("#zip").tooltip("dispose");
                }
                document.getElementById('valid-zip').innerHTML = "<span style='color: green;'>Valid</span>"; 

                validTwo = true;
            }

            if(validTwo == true ) {
                $('.nav-pills .active').parent().next('li').find('button').trigger('click');
            }

            return validTwo;
        });
    }

    shipping_details() {
        $(".verify3").click(function () {
            let validThree = true;

            let email = document.getElementById('email2').value;
            let add = document.getElementById('address2').value;
            let add2 = document.getElementById('address2_2').value;
            let phone = document.getElementById('phone-number2').value;
            let country = document.getElementById('country2').value;
            let city = document.getElementById('city2').value;
            let province = document.getElementById('province2').value;
            let zip = document.getElementById('zip2').value;
            let emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let phoneReg = /^(\d{3}[-\s]??\d{3}[-\s]?\d{4})$/;
            let cityReg = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
            let provinceReg = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
            let zipReg = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

            /* First Name */
            if ($("#first-name2").val() == "") {
                $("#first-name2").addClass("is-invalid");
                $("#first-name2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#first-name2', {
                    title: "First name cannot be blank"
                })

                validThree = false;
            } else {
                $("#first-name2").removeClass("is-invalid");
                $("#first-name2").addClass("is-valid");

                if ($("#first-name2").tooltip != undefined) {
                    $("#first-name2").tooltip("dispose");
                }
            }

            /* Last Name */
            if ($("#last-name2").val() == "") {
                $("#last-name2").addClass("is-invalid");
                $("#last-name2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#last-name2', {
                    title: "Last name cannot be blank"
                })

                validThree = false;
            } else {
                $("#last-name2").removeClass("is-invalid");
                $("#last-name2").addClass("is-valid");

                if ($("#last-name2").tooltip != undefined) {
                    $("#last-name2").tooltip("dispose");
                }
            }

            /* Email */

            if ($("#email2").val() == "") {
                $("#email2").addClass("is-invalid");
                $("#email2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#email2', {
                    title: "Email cannot be blank"
                })

                validThree = false;
            } else if (!emailReg.test(email)) {
                $("#email2").addClass("is-invalid");
                document.getElementById('valid-email2').innerHTML = "<span style='color: red;'>Email is invalid</span>";
                validThree = false;
            } else {
                $("#email2").removeClass("is-invalid");
                $("#email2").addClass("is-valid");

                if ($("#email2").tooltip != undefined) {
                    $("#email2").tooltip("dispose");
                }
                document.getElementById('valid-email2').innerHTML = "<span style='color: green;'>Valid</span>";
            }

            /* Address 1 */

            if ($("#address22").val() == "") {
                $("#address22").addClass("is-invalid");
                $("#address22").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#address22', {
                    title: "Address cannot be blank"
                })

                validThree = false;
            } else {
                $("#address22").removeClass("is-invalid");
                $("#address22").addClass("is-valid");

                if ($("#address22").tooltip != undefined) {
                    $("#address22").tooltip("dispose");
                }
            }

            /* Phone */

            if ($("#phone-number2").val() == "") {
                $("#phone-number2").addClass("is-invalid");
                $("#phone-number2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#phone-number2', {
                    title: "Phone number cannot be blank"
                })

                validThree = false;
            } else if (!phoneReg.test(phone)) {
                $("#phone-number2").addClass("is-invalid");
                document.getElementById('valid-phone2').innerHTML = "<span style='color: red;'>Invalid Phone Number</span>";
                validThree = false;
            } else {
                $("#phone-number2").removeClass("is-invalid");
                $("#phone-number2").addClass("is-valid");

                if ($("#phone-number2").tooltip != undefined) {
                    $("#phone-number2").tooltip("dispose");
                }
                document.getElementById('valid-phone2').innerHTML = "<span style='color: green;'>Valid</span>";
            }

            /* Country */

            if ($("#country2").val() == "") {
                $("#country2").addClass("is-invalid");
                $("#country2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#country2', {
                    title: "Country cannot be blank"
                })

                validThree = false;
            } else {
                $("#country2").removeClass("is-invalid");
                $("#country2").addClass("is-valid");

                if ($("#country2").tooltip != undefined) {
                    $("#country2").tooltip("dispose");
                }
            }

            /* City */

            if ($("#city2").val() == "") {
                $("#city2").addClass("is-invalid");
                $("#city2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#city2', {
                    title: "City cannot be blank"
                })

                validThree = false;
            } else if (!cityReg.test(city)) {
                $("#city2").addClass("is-invalid");
                document.getElementById('valid-city2').innerHTML = "<span style='color: red;'>Invalid City</span>";
                validThree = false;
            } else {
                $("#city2").removeClass("is-invalid");
                $("#city2").addClass("is-valid");

                if ($("#city2").tooltip != undefined) {
                    $("#city2").tooltip("dispose");
                }
                document.getElementById('valid-city2').innerHTML = "<span style='color: green;'>Valid</span>";
            }

            /* Province */

            if ($("#province2").val() == "") {
                $("#province2").addClass("is-invalid");
                $("#province2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#province2', {
                    title: "Province cannot be blank"
                })

                validThree = false;
            } else if (!provinceReg.test(province)) {
                $("#province2").addClass("is-invalid");
                document.getElementById('valid-province2').innerHTML = "<span style='color: red;'>Invalid Province</span>";
                validThree = false;
            } else {
                $("#province2").removeClass("is-invalid");
                $("#province2").addClass("is-valid");

                if ($("#province2").tooltip != undefined) {
                    $("#province2").tooltip("dispose");
                }
                document.getElementById('valid-province2').innerHTML = "<span style='color: green;'>Valid</span>";
            }

            /* ZIP */

            if ($("#zip2").val() == "") {
                $("#zip2").addClass("is-invalid");
                $("#zip2").removeClass("is-valid");

                let tooltip = new bootstrap.Tooltip('#zip2', {
                    title: "ZIP cannot be blank"
                })

                validThree = false;
            } else if (!zipReg.test(zip)) {
                $("#zip2").addClass("is-invalid");
                document.getElementById('valid-zip2').innerHTML = "<span style='color: red;'>Invalid ZIP Code</span>";
                validThree = false;
            } else {
                $("#zip2").removeClass("is-invalid");
                $("#zip2").addClass("is-valid");

                if ($("#zip2").tooltip != undefined) {
                    $("#zip2").tooltip("dispose");
                }
                document.getElementById('valid-zip2').innerHTML = "<span style='color: green;'>Valid</span>";
            }

            return validThree;
        });
    }
}

let validation = new Validation();