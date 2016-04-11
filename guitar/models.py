import datetime
from django.db import models
from django.utils import timezone
# MODELS IS DATABASE RELATED   -   \ORM

# Create your models here.
class Tab(models.Model):
    txtTab = models.TextField()
    dtePub = models.DateTimeField('date published')
    def __str__(self):
        return self.txtTab
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.dtePub <= now
    def tab_length(self):
        leng = len(self.txtTab)
        return leng

class Chord(models.Model):
    chordName = models.CharField(max_length=10)
    strpos1 = models.CharField(max_length=2)
    strpos2 = models.CharField(max_length=2)
    strpos3 = models.CharField(max_length=2)
    strpos4 = models.CharField(max_length=2)
    strpos5 = models.CharField(max_length=2)
    strpos6 = models.CharField(max_length=2)
    def __str__(self):
        return self.chordName


# class Question(models.Model):
#     txtQuestion = models.CharField(max_length=200)
#     dtePub = models.DateTimeField('date published')
#     def __str__(self):
#         return self.txtQuestion
#     def was_published_recently(self):
#         now = timezone.now()
#         return now - datetime.timedelta(days=1) <= self.dtePub <= now
#
#
# class Answer(models.Model):
#     question = models.ForeignKey(Question)
#     txtAnswer = models.CharField(max_length=200)
#     votes = models.IntegerField(default =0)
#     def __str__(self):
#         return self.txtAnswer
