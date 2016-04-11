from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^chords' , views.chords, name='chords'),
    url(r'^tabinput', views.tabinput, name='tabinput'),
    url(r'^visualiser', views.visualiser, name='visualiser'),
    url(r'^tab', views.tab, name='tab'),
    url(r'^app', views.app, name='app'),
    url(r'^achords', views.achords, name='achords'),
    url(r'^bchords', views.bchords, name='bchords'),
    url(r'^cchords', views.cchords, name='cchords'),
    url(r'^dchords', views.dchords, name='dchords'),
    url(r'^echords', views.echords, name='echords'),
    url(r'^fchords', views.fchords, name='fchords'),
    url(r'^gchords', views.gchords, name='gchords'),
    url(r'^chordnames', views.chordnames, name='chordnames'),
]

