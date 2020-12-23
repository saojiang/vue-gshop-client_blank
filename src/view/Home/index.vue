<template>
  <div >
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like/>
    <Brand></Brand>
    <Flooer></Flooer>
  </div>
</template>

<script>
import ListContainer  from './ListContainer'
import TodayRecommend  from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import Flooer from './Flooer'
export default {
  name: 'Home',
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Brand,
    Flooer,
  }
}
</script>

<style lang="less" scoped>
  .home {
    color: red;
  }
</style>