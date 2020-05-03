<template>
  <li class="event" v-bind:class="{ active: visible }">
    <template v-if="event">
      <div class="event-intro">
        <div class="event-logo">
          <img
            :src="
              event.logo_url ? event.logo_url : '/static/img/logonotfound.png'
            "
          />
        </div>
        <div class="event-info">
          <a class="event-link" @click="visible = !visible">
            <h2 class="event-name">{{ event.title }}</h2>
            <div
              v-if="event.frequency == 'None'"
              class="event-speaker"
            >{{ event.startDate }} at {{ event.eventTime }}</div>
            <div v-else class="event-speaker">{{ event.frequency }} from {{ event.eventTime }}</div>
          </a>
          <div class="event-speaker">{{ event.speaker }}</div>
          <div
            v-if="event.is_live == true"
            class="event-style srm"
            :style="{ backgroundColor: '#28a745' }"
          >Live</div>
          <div v-else class="event-style srm" :style="{ backgroundColor: '#FFFF00' }">Recorded</div>
          <div class="event-style srm">{{ event.language }}</div>
        </div>
      </div>
      <b-collapse id="eventDetails" v-model="visible" class="event-details-container">
        <div class="event-details">
          <div class="find-it">
            <h3 class="find-it-header">Find Details here:</h3>
            <ul class="find-it-list">
              <li>
                <small>Link -</small>
                <a target="_blank" :href="event.stream_link">{{ event.stream_medium }}</a>
              </li>
              <li>
                <small>Location -</small>
                {{ event.venue.name }},
                {{ event.venue.city }}, {{ event.venue.country }}
              </li>
            </ul>
          </div>
        </div>
      </b-collapse>
    </template>
    <template v-else-if="event === false" />
  </li>
</template>

<script>
export default {
  name: 'EventItem',
  // eslint-disable-next-line vue/require-prop-types
  props: ['event'],
  data() {
    return {
      visible: false,
    }
  },
}
</script>
