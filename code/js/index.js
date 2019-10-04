import { data_accounts } from './data-accounts.js';

$(".ui.checkbox").checkbox();


$('.ui.form')
    .form({
        fields: {
            username: {
                identifier: 'username',
                rules: [
                    {
                        type: 'empty',
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                    },
                ]
            }
        },

        onSuccess: (event) => {
            if ($('#username').val() == data_accounts.admin.username &&
                $('#password').val() == data_accounts.admin.password) {
                    window.location = 'adm-home-dashboard.html';
            }

            else if ($('#username').val() == data_accounts.acc1.username &&
                    $('#password').val() == data_accounts.acc1.password) {
                        window.location = 'cli-home-dashboard.html';
            }

            // event.preventDefault();
            return false;
        }
    })
;