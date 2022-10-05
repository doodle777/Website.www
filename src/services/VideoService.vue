<script>
import BaseService from "./BaseService";

export default {
  name: "VideoService",
  extends: BaseService,
  methods: {
    getVideoList() {
      return BaseService.methods.get("v1/video/listAll");
    },
  },
};
</script>
