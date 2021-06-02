<template>
  <section class="delicious-section contact-section">

    <h1>Article Creator Form</h1>

    <div class="container mt-5">
      <div class="columns d-flex justify-content-center">
        <div class="column is-6">
          <div class="contact-form">
            <div class="columns is-multiline">

              <div class="column is-12">
                <h3>Title</h3>
              </div>
              <div class="column is-6">
                <div class="form-group">
                  <input
                    v-model="articleTitle"
                    type="text"
                    class="form-control"
                    placeholder="Title"
                  />
                </div>
              </div>

              <div class="column is-12">
                <h3>Excerpt</h3>
              </div>
              <div class="column is-6">
                <div class="form-group">
                  <input
                    v-model="articleExcerpt"
                    type="text"
                    class="form-control"
                    placeholder="Excerpt"
                  />
                </div>
              </div>

              <div class="column is-12">
                <h3>Category</h3>
              </div>
              <div class="column is-6">
                <div class="form-group">
                  <input
                    v-model="articleCategory"
                    type="text"
                    class="form-control"
                    placeholder="Category (General es una de las permitidas)"
                  />
                </div>
              </div>

            </div>

            <div class="form-group d-flex justify-content-center">
              <button class="button is-warning" @click="uploadArticle">Upload Article</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleCreatorForm",
  data() {
    return {
      articleTitle: "",
      articleExcerpt: "",
      articleCategory: "",
    };
  },
  methods: {
    async uploadArticle() {
      try {
        const articleData = {
          title: this.articleTitle,
          slug: "",
          excerpt: this.articleExcerpt,
          category: this.articleCategory
        }

        console.log(articleData)
        
        const response = await this.$api.articles.upload(articleData)
        console.log(response)

      } catch (error) {
        console.log(error)
        alert("Article could not be uploaded.")
      }
    },
  },
};
</script>
