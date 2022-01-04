# Flask Login Blueprint

A minimal flask app with auth blueprint.
Build on top of ths project or use  it with an existing one.

- [Install](#Install)
- [Use](#Use)
- [Blueprint](#Blueprint)

## Install

Clone this repository, or download the project. Then, in terminal, make sure to start a virtual enviroment with:

```sh
python -m venv venv

```
After that,activate the venv and install the required packages with:

```sh
source venv/bin/activate
pip install -r requirements.txt

```

## Use

To test, first export the app in development mode with:

```sh
export FLASK_ENV=development

```
Then, run the app with the command:

```sh
python -m flask run
```

## BLUEPRINT

All pieces of the Auth blueprints are located in [Auth](./Auth)
So, one could copy the entire folder into a existing project and register the blueprint with the commands:

```py
from app.Auth.Auth import auth
app.register_blueprint(auth)
```

Remember to update the User models with your taste of models. :)
