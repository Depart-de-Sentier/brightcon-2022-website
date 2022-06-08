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
              presenters: 'POLCA',
              keynote: false,
            },
            {
              time: '10:15-10:30',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '10:30-11:15',
              title: 'Talks TBD',
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
              presenters: 'Sasha Kim',
              keynote: true,
            },
            {
              time: '14:15-15:00',
              title: 'Software Demonstration TBD',
              keynote: false,
            },
            {
              time: '15:00-15:15',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '15:15-16:00',
              title: 'Brightway 2.5 in action',
              presenters: 'Chris Mutel',
              keynote: false,
            },
            {
              time: '16:00-17:00',
              title: 'Poster / Interactive session TBD',
              keynote: false,
            },

            {
              time: '17:30-20:00',
              title: 'Conference cocktail drink',
              keynote: false,
            },
            {
              time: '19:00-19:30',
              title: "Keynote: What I don't like about Brightway",
              presenters: 'Michael Srocka',
              keynote: true,
            },
          ],
        },
        {
          date: 'Thursday, Sept. 29',
          sessions: [
            {
              time: '9:00-9:30',
              title: 'Keynote: Democratizing environmental data',
              presenters: 'Sensor.community (TBC)',
              keynote: false,
            },
            {
              time: '9:30-10:15',
              title: 'Open data and science in MFA',
              keynote: false,
            },
            {
              time: '10:15-10:30',
              title: 'Pause',
              keynote: false,
            },
            {
              time: '10:30-11:15',
              title: 'Integrating novel open data (lightning talks)',
              presenters: '5 Minutes per speaker. Must include code for reuse.',
              keynote: false,
            },
            {
              time: '11:15-11:30',
              title: 'Contest solutions showcase',
              keynote: false,
            },
            {
              time: '11:30-11:45',
              title: 'Contest judging & results',
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
