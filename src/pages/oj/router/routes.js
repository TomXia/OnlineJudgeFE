// all routes here.
import {
  About,
  ACMRank,
  Announcements,
  ApplyResetPassword,
  FAQ,
  Home,
  Logout,
  NotFound,
  OIRank,
  Problem,
  ProblemList,
  ResetPassword,
  SubmissionDetails,
  SubmissionList,
  UserHome
} from '../views'

import * as Contest from '@oj/views/contest'
import * as Setting from '@oj/views/setting'

export default [
  {
    name: 'home',
    path: '/',
    meta: {title: '首页'},
    component: Home
  },
  {
    name: 'logout',
    path: '/logout',
    meta: {title: '退出'},
    component: Logout
  },
  {
    name: 'apply-reset-password',
    path: '/apply-reset-password',
    meta: {title: '确认重设密码'},
    component: ApplyResetPassword
  },
  {
    name: 'reset-password',
    path: '/reset-password/:token',
    meta: {title: '找回密码'},
    component: ResetPassword
  },
  {
    name: 'problem-list',
    path: '/problems',
    meta: {title: '题目列表'},
    component: ProblemList
  },
  {
    name: 'problem-details',
    path: '/problem/:problemID',
    meta: {title: '题目信息'},
    component: Problem
  },
  {
    name: 'submission-list',
    path: '/status',
    meta: {title: '提交列表'},
    component: SubmissionList
  },
  {
    name: 'submission-details',
    path: '/status/:id/',
    meta: {title: '提交信息'},
    component: SubmissionDetails
  },
  {
    name: 'contest-list',
    path: '/contests',
    meta: {title: '比赛列表'},
    component: Contest.ContestList
  },
  {
    name: 'contest-details',
    path: '/contest/:contestID/',
    component: Contest.ContestDetails,
    meta: {title: '比赛信息'},
    children: [
      {
        name: 'contest-submission-list',
        path: 'submissions',
        component: SubmissionList
      },
      {
        name: 'contest-problem-list',
        path: 'problems',
        component: Contest.ContestProblemList
      },
      {
        name: 'contest-problem-details',
        path: 'problem/:problemID/',
        component: Problem
      },
      {
        name: 'contest-announcement-list',
        path: 'announcements',
        component: Announcements
      },
      {
        name: 'contest-rank',
        path: 'rank',
        component: Contest.ContestRank
      },
      {
        name: 'acm-helper',
        path: 'helper',
        component: Contest.ACMContestHelper
      }
    ]
  },
  {
    name: 'acm-rank',
    path: '/acm-rank',
    meta: {title: 'ACM Rankings'},
    component: ACMRank
  },
  {
    name: 'oi-rank',
    path: '/oi-rank',
    meta: {title: 'OI Rankings'},
    component: OIRank
  },
  {
    name: 'user-home',
    path: '/user-home',
    component: UserHome,
    meta: {requiresAuth: true, title: '用户首页'}
  },
  {
    path: '/setting',
    component: Setting.Settings,
    children: [
      {
        name: 'default-setting',
        path: '',
        meta: {requiresAuth: true, title: '默认设置'},
        component: Setting.ProfileSetting
      },
      {
        name: 'profile-setting',
        path: 'profile',
        meta: {requiresAuth: true, title: '信息'},
        component: Setting.ProfileSetting
      },
      {
        name: 'account-setting',
        path: 'account',
        meta: {requiresAuth: true, title: '账户'},
        component: Setting.AccountSetting
      },
      {
        name: 'security-setting',
        path: 'security',
        meta: {requiresAuth: true, title: '安全'},
        component: Setting.SecuritySetting
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {title: 'About'},
    component: About
  },
  {
    path: '/faq',
    name: 'faq',
    meta: {title: 'FAQ'},
    component: FAQ
  },
  {
    path: '*',
    meta: {title: '404'},
    component: NotFound
  }
]
