<template>
  <div class="container">
    <h1>Conference</h1>
    <p>
      The Brightcon 2022 conference will be held on Sept. 28 and the morning of
      Sept. 29. It will be a mix of talks, interactive sessions, workshops, and
      contests. We are trying our best to make it informative and enjoyable!
    </p>

    <div class="row">
      <div class="col card" :key="i" v-for="(day, i) in days">
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
            <tr :key="j" v-for="(session, j) in day.sessions">
              <td>{{ session.time }}</td>
              <td>{{ session.title }}</td>
              <td>{{ session.presenters }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

interface Presenter {
  name: string;
}

interface Session {
  time: string;
  title: string;
  presenters?: string;
}

interface Day {
  date: string;
  sessions: Session[];
}

interface Data {
  days: Day[];
}

export default Vue.extend({
  data(): Data {
    return {
      days: [
        {
          date: "Wednesday, Sept. 28",
          sessions: [
            {
              time: "9:00-9:15",
              title: "Conference introduction & Brightway governance",
              presenters: "Chris Mutel",
            },
            {
              time: "9:15-10:00",
              title: "Tools and standards for prospective LCA",
              presenters: "POLCA",
            },
            {
              time: "10:15-10:30",
              title: "Pause",
            },
            {
              time: "10:30-11:15",
              title: "Talks TBD",
            },
            {
              time: "11:15-12:00",
              title: "Help, I need somebody!",
              presenters:
                "Participants will post problems (easy or hard) and be paired with Brightway experts",
            },
            {
              time: "12:00-13:30",
              title: "Lunch",
            },
            {
              time: "13:30-14:15",
              title: "GSA Framework",
              presenters: "Sasha Kim",
            },
            {
              time: "14:15-15:00",
              title: "Software Demonstration TBD",
            },
            {
              time: "15:00-15:15",
              title: "Pause",
            },
            {
              time: "15:15-16:00",
              title: "Brightway 2.5 in action",
              presenters: "Chris Mutel",
            },
            {
              time: "16:00-17:00",
              title: "Interactive session TBD",
            },

            {
              time: "17:30-20:00",
              title: "Conference cocktail drink",
            },
            {
              time: "19:00-19:30",
              title: "Keynote: What I don't like about Brightway",
              presenters: "Michael Srocka",
            },
          ],
        },
        {
          date: "Thursday, Sept. 29",
          sessions: [
            {
              time: "9:00-9:30",
              title: "Keynote: Democratizing environmental data",
              presenters: "Sensor.community (TBC)",
            },
            {
              time: "9:30-10:15",
              title: "Open data and science in MFA",
            },
            {
              time: "10:15-10:30",
              title: "Pause",
            },
            {
              time: "10:30-11:15",
              title: "Integrating novel open data (lightning talks)",
              presenters: "5 Minutes per speaker. Must include code for reuse.",
            },
            {
              time: "11:15-11:30",
              title: "Contest solutions showcase",
            },
            {
              time: "11:30-11:45",
              title: "Contest judging & results",
            },
            {
              time: "12:00-12:30",
              title: "Farewell and thanks",
            },
          ],
        },
      ],
    };
  },
});
</script>
