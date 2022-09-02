<template>
  <div class="container">
    <h1>Conference</h1>
    <p>
      The Brightcon 2022 conference will be held on Sept. 28 and the morning of
      Sept. 29. It will be a mix of talks, interactive sessions, workshops, and
      contests. We are trying our best to make it informative and enjoyable!
    </p>

    <div class="row">
      <div v-for="(day, i) in days" :key="i" class="col card">
        <h3>Provisional schedule: {{ day.date }}</h3>

        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Presenter(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(session, session_id) in day.sessions" :key="session_id">
              <td>{{ session.time }}</td>
              <td>{{ session.title }}</td>
              <td v-if="session.keynote">
                <nuxt-link to="/speakers">{{ session.presenters }}</nuxt-link>
              </td>
              <td v-else>{{ session.presenters }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface Session {
  time: string
  title: string
  presenters?: string
  keynote: boolean
}

interface Day {
  date: string
  sessions: Session[]
}

interface Data {
  days: Day[]
}

export default Vue.extend({
  data(): Data {
    return {
      days: [
        {
          date: 'Wednesday, Sept. 28',
          sessions: [
            {
              time: '9:00-9:15',
              title: 'Conference introduction & Brightway governance',
              presenters: 'Chris Mutel',
              keynote: false,
            },
            {
              time: '9:15-10:00',
              title: 'Tools and standards for prospective LCA',
              presenters: 'Romain Sacchi',
              keynote: false,
            },
            {
              time: '10:15-10:30',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '10:30-10:50',
              title: 'Integrating LCA in the digital transformation of factories',
              presenters: 'Miguel Fernández Astudillo',
              keynote: false,
            },
            {
              time: '10:50-11:10',
              title: 'Perturbation Analysis in Brightway2: Identifying key factors for the environmental performance of a product or service',
              presenters: 'Sarah Schmidt, David Laner',
              keynote: false,
            },
            {
              time: '11:15-12:00',
              title: 'Help, I need somebody!',
              presenters:
                'Participants will post problems (easy or hard) and be paired with Brightway experts',
              keynote: false,
            },
            {
              time: '12:00-13:30',
              title: 'Lunch',
              keynote: false,
            },
            {
              time: '13:30-14:15',
              title: 'GSA Framework',
              presenters: 'Aleksandra Kim',
              keynote: true,
            },
            {
              time: '14:15-14:45',
              title: 'openlca2bw package to import OpenLCA databases into Brightway2 structure',
              presenters: 'Cyrille Francois',
              keynote: false,
            },
            {
              time: '14:45-15:00',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '15:00-16:00',
              title: 'Brightway 2.5 in action',
              presenters: 'Chris Mutel',
              keynote: false,
            },
            {
              time: '16:00-17:00',
              title: 'Poster session',
              keynote: false,
            },

            {
              time: '16:30-20:00',
              title: 'Conference cocktail drink',
              keynote: false,
            },
          ],
        },
        {
          date: 'Thursday, Sept. 29',
          sessions: [
            {
              time: '09:00-09:45',
              title: 'Keynote: Open LCA software advances',
              presenters: 'Michael Srocka',
              keynote: true,
            },
            {
              time: '9:45-10:15',
              title: 'Round Table: Semantic technologies in LCA',
              presenters: 'Calin Boje, Agneta Ghose, Didier Beloin-St-Pierre',
              keynote: false,
            },
            {
              time: '10:15-10:45',
              title: 'Global LCA Data Access network (GLAD) - Will integrating its API into LCA software benefit LCA (power) users?',
              presenters: 'Oliver Kusche, Claudia Giacovelli',
              keynote: false,
            },
            {
              time: '10:45-11:00',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '11:00-11:15',
              title: 'Lightning talks',
              presenters: '5 Minutes per speaker. Last minute entries welcome!',
              keynote: false,
            },
            {
              time: '11:15-11:40',
              title: 'Brightcon awards',
              keynote: false,
            },
            {
              time: '11:40-12:00',
              title: 'Visualization contest.',
              keynote: false,
            },
            {
              time: '12:00-12:30',
              title: 'Farewell and thanks',
              keynote: false,
            },
          ],
        },
      ],
    }
  },
})
</script>
