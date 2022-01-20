from flask import Blueprint, render_template,request, redirect,flash,url_for
from interact_with_DB import interact_db
import json
assignment12 = Blueprint('assignment12', __name__,
                         static_folder='static',
                         static_url_path='/static',
                         template_folder='templates')


@assignment12.route('/assignment12/restapi_users', defaults ={'user_id': 1})
@assignment12.route('/assignment12/restapi_users/<int:user_id>')
def ass12_user_func(user_id):
    query = f"select * from Users where id = {user_id};"
    users = interact_db(query,"fetch")
    if len(users) == 0:
        returned_json= {
           'Status':'Not good',
           'Error':'No User with this ID'
        }
    else:
        user = {
            'id': users[0].id,
            'name':users[0].user_name,
            'email':users[0].email,
            'age':users[0].age

        }
        returned_json= json.dumps(user)
    return render_template('assignment12.html',users = returned_json)