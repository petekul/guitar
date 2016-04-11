# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guitar', '0004_auto_20151127_1907'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tab',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('txtTab', models.TextField()),
                ('dtePub', models.DateTimeField(verbose_name=b'date published')),
            ],
        ),
    ]
