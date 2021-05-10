<template>
  <div class="container">
    <div style="max-width: 300px" dir="rtl">
      <q-input rounded outlined v-model="course.title" label="שם הקורס" dir="rtl"/>
      <q-input rounded outlined v-model="course.description" label="תיאור הקורס" dir="rtl"/>
      <h5>הוסף פרק </h5>
      <q-input rounded outlined v-model="chapterDetails.name" label="נושא הפרק" dir="rtl"/>
      <q-input rounded outlined v-model="singleChapter.name" label="נושא הסרטון" dir="rtl"/>
      <q-input rounded outlined v-model="singleChapter.url" label=" קישור" dir="rtl"/>
      <q-btn label="הוסף סרטון לפרק" rounded @click="addChart()"/>
      <q-btn label="הוסף פרק לקורס" rounded @click="addChart()"/>
      <q-btn class="q-mb-lg" style="max-width: 200px" color="orange" text-color="black"
             @click="createCourseAc(course)" label="הכנס קורס"
      />

      <q-list class="glossy" bordered separator>
        <q-item v-ripple>
          <q-item-section>רשימת הפרקים</q-item-section>
        </q-item>

        <q-item v-for="(chapter, index) in course.chapters" :key="index" v-ripple>
          <q-item-section>
            <div>
              <q-item-label>{{ chapter.subtitle }}</q-item-label>
              <q-item-label>{{ chapter.name }}</q-item-label>
              <q-item-label>{{ chapter.url }}</q-item-label>
            </div>

            <div>
              <q-btn
                @click="removeChapter(index)"
                round
                color="primary"
                size="xs"
                icon="delete"
              />
            </div>

            <q-btn icon="edit" size="10px" color="primary" rounded style="max-width: 30px" @click="openPopup(chapter, index)" />

            <div>
              <q-dialog v-model="prompt" persistent>
                <q-card style="min-width: 350px">
                  <q-card-section>
                    <div dir="rtl" class="text-h6">ערוך פרק</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <div dir="rtl">
                      <q-input v-model="editedChapter.name"/>
                      <!--                      <q-input dense v-model="address" autofocus @keyup.enter="prompt = false"/>-->

                      <q-input v-model="editedChapter.url"/>
                    </div>
                  </q-card-section>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="ביטול" v-close-popup/>
                    <q-btn flat label="עדכן" @click="updateChapter(editedChapter)" v-close-popup/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>

          </q-item-section>
        </q-item>
      </q-list>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "InputsCourses",

  data() {
    return {
      prompt: false,
      course: {
        title: '',
        description: '',
        chapters: [],
      },
      chapterDetails: {
        name: '',
        charts: []
      },
      singleChapter:{
        name:'',
        url:'',
        char: '',
        id:''
      }
    }
  },
  methods: {
    ...mapActions('courses', ['createCourseAc']),
    addChart() {
      this.chapterDetails.id = Math.floor(Math.random() * 10000000000)
      this.chapterDetails.char = this.course.chapters.length + 1
      this.course.chapters.push(this.chapterDetails)
      this.chapterDetails = {}
    },
    insert() {
      this.chapters.push(this.title, this.description)
    },
    removeChapter(index) {
      this.course.chapters.splice(index, 1)
    },
    openPopup(chapter , index) {
      this.prompt = true;
      this.editedChapter = {...chapter, index:index}
    },
    updateChapter(editedChapter) {
      const final = {...editedChapter}
      delete final.index;
      this.course.chapters.splice(editedChapter.index, 1, final)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}


</style>
