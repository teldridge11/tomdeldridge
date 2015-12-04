from . import views
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.HomeView.as_view(), name='home'),
    url(r'^services/', views.ServicesView.as_view(), name='services'),
    url(r'^portfolio/', views.PortfolioView.as_view(), name='portfolio'),
    url(r'^contact/', views.ContactView.as_view(), name='contact'),
    url(r'^contactauth/', views.send_email),
    url(r'^contactfailure/', views.ContactFailureView.as_view()),
    url(r'^contactsuccess/', views.ContactSuccessView.as_view()),
]
