import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
{
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
{
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
{
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
{
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    },
    {
        title: 'First',
        content: 'Lorem ipsum...'
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...'
    }
];

class AccordionView extends Component {
    constructor(props){
        super(props);
        this.state ={

        };
        this.renderContent = this.renderContent.bind(this);
        this.renderHeader = this.renderHeader.bind(this)
    }

    renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    }

    renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
            <Accordion
                sections={SECTIONS}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
            />
            </ScrollView>
        );
    }
}

const styles = {
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    }
};


export default AccordionView;