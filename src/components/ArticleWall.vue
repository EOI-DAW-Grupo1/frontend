<template>
  <section class="delicious-section">

    <h1>article wall</h1>

    <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <ArticleItem
          v-for="item in articles"
          :value="item"
          :key="item._id"
        />
      </div>
    </div>

  </section>
</template>

<script>
import ArticleItem from "@/components/partials/ArticleItem";

export default {
  name: "ArticleWall",
  components: {
    ArticleItem
  },
  data() {
    return {
      articles: [],
    };
  },
  computed: {
  },
  async beforeMount() {
    try {
      this.articles = await this.$api.articles.list();
      console.log(this.articles)
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<style>
</style>