# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guitar', '0002_auto_20151122_1818'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='txtChoice',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='question',
            name='txtQuestion',
            field=models.CharField(max_length=200),
        ),
    ]
