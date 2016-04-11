from django import forms

class TabForm(forms.Form):
    songname = forms.CharField(label = "Song name", max_length=100)
    tab = forms.CharField(label = "Tab")