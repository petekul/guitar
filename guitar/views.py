from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.core.urlresolvers import reverse

from django.views import generic
from .forms import TabForm
# Create your views here.

# def vote(request, question_id):
#     q = get_object_or_404(Question, pk=question_id)
#     try:
#         selected_choice = q.answer_set.get(pk=request.POST['answer'])
#     except (KeyError, Answer.DoesNotExist):
#         # Redisplay the question voting form.
#         return render(request, 'guitar/tab.html', {
#             'question': q,
#             'error_message': "You didn't select an answer.",
#         })
#     else:
#         selected_choice.votes += 1
#         selected_choice.save()
#         # Always return an HttpResponseRedirect after successfully dealing
#         # with POST data. This prevents data from being posted twice if a
#         # user hits the Back button.
#         return HttpResponseRedirect(reverse('guitar:results', args=(q.id,)))

def index(request):
    return render(request, 'guitar/index.html')

def chords(request):
    return render(request, 'guitar/chordlibrary.html')

def tab(request):
    return render(request, 'guitar/tab.html')

def tabinput(request):
    return render(request, 'guitar/tabinput.html')

def visualiser(request):
    if request.method == "POST":
        tab_value = request.POST.get('tab')
        finalStrings = ["e|", "B|", "G|", "D|", "A|", "E|"]

        if not tab_value == "":
            strings = tab_value.split()
            for str in strings:
                if len(str) > 1:
                    if str[0] == 'e' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[0] += str
                        continue
                    if str[0] == 'B' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[1] += str
                        continue
                    if str[0] == 'G' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[2] += str
                        continue
                    if str[0] == 'D' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[3] += str
                        continue
                    if str[0] == 'A' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[4] += str
                        continue
                    if str[0] == 'E' and (str[1] == '|' or str[1] == '-'):
                        str = str[1:]
                        for s in str:
                            if s != '-':
                                str = str[1:]
                            else:
                                break
                        finalStrings[5] += str
                        continue
        finalTab = ""
        for s in finalStrings:
            finalTab += (s + "\n")

        form = TabForm(request.POST)            #DO MORE DATA PREPROCESSING HERE.
        if form.is_valid():
            form.songname = request.POST.get('songname')
            form.tab = finalTab
        request.POST = request.POST.copy()
        request.POST['tab'] = finalTab

    return render(request, 'guitar/visualiser.html', {'form' : request.POST})

def guitar(request):
    return render(request, 'guitar/app.html')

def app(request):
    if request.method == "POST":
        tab_value = request.POST.get('tab')
        finalStrings = ["e|", "B|", "G|", "D|", "A|", "E|"]

        if not tab_value == "":
            strings = tab_value.split()
            for str in strings:
                if str[0] == 'e' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[0] += str
                    continue
                if str[0] == 'B' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[1] += str
                    continue
                if str[0] == 'G' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[2] += str
                    continue
                if str[0] == 'D' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[3] += str
                    continue
                if str[0] == 'A' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[4] += str
                    continue
                if str[0] == 'E' and (str[1] == '|' or str[1] == '-'):
                    str = str[1:]
                    for s in str:
                        if s != '-':
                            str = str[1:]
                        else:
                            break
                    finalStrings[5] += str
                    continue
        finalTab = ""
        for s in finalStrings:
            finalTab += (s + "\n")

        form = TabForm(request.POST)            #DO MORE DATA PREPROCESSING HERE.
        if form.is_valid():
            form.songname = request.POST.get('songname')
            form.tab = finalTab
        request.POST = request.POST.copy()
        request.POST['tab'] = finalTab

    return render(request, 'guitar/app.html', {'form' : request.POST})

def achords(request):
    return render(request, 'guitar/achords.html')
def bchords(request):
    return render(request, 'guitar/bchords.html')
def cchords(request):
    return render(request, 'guitar/cchords.html')
def dchords(request):
    return render(request, 'guitar/dchords.html')
def echords(request):
    return render(request, 'guitar/echords.html')
def fchords(request):
    return render(request, 'guitar/fchords.html')
def gchords(request):
    return render(request, 'guitar/gchords.html')
def chordnames(request):
    return render(request, 'guitar/chordnames.html')


'''
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'guitar/tab.html', {'question': question})



def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'guitar/results.html', {'question': question})

'''