"""
WSGI config for tomdeldridge project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tomdeldridge.settings")

import os

from django.core.wsgi import get_wsgi_application
from dj_static import Cling

application = Cling(get_wsgi_application())

#application = get_wsgi_application()
