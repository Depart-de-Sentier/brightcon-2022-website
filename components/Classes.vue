<template>
  <div class="container">
    <h1>Classes</h1>
    <p>
      The first two days (Sept. 26-27) will be devoted to classes. There will be
      two tracks, beginners and advanced.
    </p>
    <div class="indent bg-light">
      <h2>You will need</h2>
      <p>
        We want to make the classes as productive and interactive as possible.
        <br />
        For this, we will be using a jupyter lab hub instance managed by
        Depart-de-Sentier where brightway and jupyter are already up and
        running. This means that
        <strong
          >you will be able to start using Brightway immediately during the
          classes</strong
        >. Look for the
        <span class="tag is-small bd-dark">jupyter lab</span> next to the topic
        where the jupyter lab will be used.
        <br />
        <strong>All you need is your own computer and a web-browser</strong>.
        For the Activity Browser related parts of the classes, (look for the
        <span class="tag is-small bd-dark">AB</span> tag next to the topic) we
        will be there ready to help you install it in your laptop, but if you
        can come with a working installation of it, it will save us all some
        time. Take a look at the documentation of the
        <a
          href="https://github.com/LCA-ActivityBrowser/activity-browser#installation"
        >
          Activity Browser</a
        >
        for installation instructions.
      </p>
    </div>
    <br />
    <div v-for="(day, i) in sessionsMonday" :key="i">
      <header>
        <h3>Provisional schedule: {{ day.date }}</h3>
      </header>
      <div class="row">
        <div class="col card">
          <header><h3>Beginners track</h3></header>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(session, session_id) in day.beginnerSessions"
                :key="session_id"
              >
                <td>{{ session.time }}</td>
                <td>
                  {{ session.topic }}
                  <div v-if="session.platform">
                    <span class="tag is-small">{{ session.platform }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col card">
          <header><h3>Advanced track</h3></header>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(session, session_id) in day.advancedSessions"
                :key="session_id"
              >
                <td>{{ session.time }}</td>
                <td>
                  {{ session.topic }}
                  <div v-if="session.platform">
                    <span class="tag is-small">{{ session.platform }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-for="(day, i) in sessionsTuesday" :key="i">
      <header>
        <h3>Provisional schedule: {{ day.date }}</h3>
      </header>
      <div class="row">
        <div class="col card">
          <header><h3>Beginners track</h3></header>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(session, session_id) in day.beginnerSessions"
                :key="session_id"
              >
                <td>{{ session.time }}</td>
                <td>
                  {{ session.topic }}
                  <div v-if="session.platform">
                    <span class="tag is-small">{{ session.platform }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col card">
          <header><h3>Advanced track</h3></header>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(session, session_id) in day.advancedSessions"
                :key="session_id"
              >
                <td>{{ session.time }}</td>
                <td>
                  {{ session.topic }}
                  <div v-if="session.platform">
                    <span class="tag is-small">{{ session.platform }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface Session {
  track: string
  time: string
  topic: string
  trainers?: string
  platform?: string
}

interface Day {
  date: string
  beginnerSessions: Session[]
  advancedSessions: Session[]
}

interface Data {
  sessionsMonday: Day[]
  sessionsTuesday: Day[]
}

export default Vue.extend({
  data(): Data {
    return {
      sessionsMonday: [
        {
          date: 'Monday, Sept. 26',
          beginnerSessions: [
            {
              track: 'Beginners',
              time: '9:30-11:15',
              topic: 'Projects, databases, activities, exchanges.',
              trainers: 'TBC',
              platform: 'jupyter lab',
            },
            {
              track: 'Beginners',
              time: '12:35-13:30',
              topic: 'Lunch + Activity Browser install fest',
            },
            {
              track: 'Beginners',
              time: '13:30-15:00',
              topic: 'Calculations and Interpretations in Activity Browser',
              platform: 'AB',
            },
            {
              track: 'Beginners',
              time: '15:15-16:15',
              topic: 'Effective interaction with the Activity Browser',
              platform: 'AB',
            },
          ],
          advancedSessions: [
            {
              track: 'Advanced',
              time: '9:30-11:15',
              topic: 'Brightway 2.5 - What has changed?',
              platform: 'jupyter lab',
            },
            {
              track: 'Advanced',
              time: '11:15-12:35',
              topic: 'Data vectors and arrays, resource groups and interfaces.',
              platform: 'jupyter lab',
            },
            {
              track: 'Advanced',
              time: '12:35-13:30',
              topic: 'Lunch',
            },
            {
              track: 'Advanced',
              time: '13:30-15:00',
              topic: 'Integrating external models (TBC)',
            },
            {
              track: 'Advanced',
              time: '15:15-16:00',
              topic: 'Calculations in the cloud (TBC)',
            },
          ],
        },
      ],
      sessionsTuesday: [
        {
          date: 'Tuesday, Sept. 27',
          beginnerSessions: [
            {
              track: 'Beginners',
              time: '09:30-11:15',
              topic: 'Data Input Output',
              platform: 'jupyter lab',
            },
            {
              track: 'Beginners',
              time: '11:15-12:35',
              topic: 'Data Input Output',
              platform: 'jupyter lab',
            },
            {
              track: 'Beginners',
              time: '13:30-15:05',
              topic: 'Basic Data Manipulation',
              platform: 'jupyter lab',
            },
          ],
          advancedSessions: [
            {
              track: 'Advanced',
              time: '9:30-11:00',
              topic: 'Regionalization part 1',
              platform: 'jupyter lab',
            },
            {
              track: 'Advanced',
              time: '11:15-12:35',
              topic: 'Regionalization part 2',
              platform: 'jupyter lab',
            },
            {
              track: 'Advanced',
              time: '13:30-15:00',
              topic: 'Activity Browser fun with Marc',
              trainers: 'Marc van der Meide',
              platform: 'AB',
            },
            {
              track: 'Advanced',
              time: '15:15-16:00',
              topic: 'Reproducible science with Brightway (TBC)',
              platform: 'jupyter lab',
            },
          ],
        },
      ],
    }
  },
})
</script>
<style>
.indent {
  padding: 20px;
}
</style>
