<template>
  <li class="event" :class="{ active: visible }">
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
            <div v-if="event.frequency == 'None'" class="event-speaker">
              {{ event.startDate }} at {{ event.eventTime }}
            </div>
            <div v-else class="event-speaker">
              {{ event.frequency === 'Once' ? '' : `${event.frequency} from` }}
              {{ event.startDate }} at
              {{ event.eventTime }}
            </div>
          </a>
          <div class="event-speaker">{{ event.speaker }}</div>
          <div v-if="event.is_live == true" class="event-style srm">
            <font-awesome-icon
              :icon="['fas', 'broadcast-tower']"
              :style="{ color: '#28a745' }"
            />
            Live Now
          </div>
          <div v-else class="event-style srm">
            <font-awesome-icon
              :icon="['fas', 'broadcast-tower']"
              :style="{ color: 'grey' }"
            />
            Recorded
          </div>
          <div class="event-style srm">
            <font-awesome-icon
              v-if="event.qa_allowed"
              :icon="['fas', 'language']"
              :style="{ color: 'skyblue ' }"
            />
            {{ event.language }}
          </div>
          <!-- <div class="event-style srm">
            QA Allowed:
            <font-awesome-icon
              v-if="event.qa_allowed"
              :icon="['fas', 'check']"
              :style="{ color: '#28a745 ' }"
            />
            <font-awesome-icon
              v-else
              :icon="['fas', 'times']"
              :style="{ color: 'red ' }"
              size="1x"
            />
          </div> -->
        </div>
      </div>
      <b-collapse
        id="eventDetails"
        v-model="visible"
        class="event-details-container"
      >
        <div class="event-details">
          <div class="find-it">
            <h3 class="find-it-header">Watch or listen on:</h3>
            <ul class="find-it-list">
              <li>
                <a target="_blank" :href="event.stream_link">
                  <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    :style="{ color: '#ed3833' }"
                    size="2x"
                  />
                </a>
                <a target="_blank" :href="event.stream_link">
                  <font-awesome-icon
                    :icon="['fas', 'podcast']"
                    :style="{ color: '#e038f3' }"
                    size="2x"
                  />
                </a>
                <a target="_blank" :href="event.stream_link">
                  <font-awesome-icon
                    :icon="['fas', 'rss-square']"
                    :style="{ color: '#ed8933' }"
                    size="2x"
                  />
                </a>
              </li>
              <li>
                <small>Location -</small>
                {{ event.venue.name }}, {{ event.venue.city }},
                {{ event.venue.country }}
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
