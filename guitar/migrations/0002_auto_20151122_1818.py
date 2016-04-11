# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guitar', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='txtChoice',
            field=models.CharField(max_length=200, verbose_name=b'Answer text'),
        ),
        migrations.AlterField(
            model_name='question',
            name='txtQuestion',
            field=models.CharField(max_length=200, verbose_name=b'Question text'),
        ),
    ]
