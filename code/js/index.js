$(".ui.checkbox").checkbox();


$(".ui.form")
    .form({
        fields: {
            username: {
                identifier: "username",
                rules: [
                    {
                        type: "empty",
                    }
                ]
            },
            password: {
                identifier: "password",
                rules: [
                    {
                        type: "empty",
                    },
                ]
            }
        },

        onSuccess: (event) => {
            $.ajax({
                url: "https://5d99381a61c84c00147d7433.mockapi.io/gsw-test/accounts",
                type: "GET",
                dataType: "json",

                success: (data) => {
                    var username = $("#username").val();
                    var password = $("#password").val();

                    // Data[0] -> ADMIN
                    //  id: '1',
                    //  password: 37,
                    //  username: 'username 1'
                    
                    // Data[1] -> Cliente
                    //  id: '2',
                    //  password: 50,
                    //  username: 'username 2'

                    if (username == data[0].username && password == data[0].password) {
                        window.location = "adm-home-dashboard.html";
                    }

                    else {
                        $.each(data, (index, value, usr=username, psw=password) => {
                            if (usr == value.username && psw == value.password) {
                                window.location = "cli-home-dashboard.html";
                            }
                        })
                        ;
                    }
                }
            })
            ;

            return false;
        }
    })
;