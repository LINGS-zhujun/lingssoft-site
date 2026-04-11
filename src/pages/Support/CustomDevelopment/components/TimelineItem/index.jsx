import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useThemeMode } from "context/ThemeModeContext";

function TimelineItem({ color, icon, title, dateTime, description, lastItem }) {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox
      position="relative"
      mb={3}
      sx={(theme) => ({
        "&:before": {
          content: '""',
          position: "absolute",
          top: "2rem",
          left: "17px",
          height: "100%",
          borderLeft: lastItem ? "none" : `2px solid ${theme.palette.grey[300]}`,
        },
      })}
    >
      <MKBox display="flex" alignItems="flex-start">
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="2.25rem"
          height="2.25rem"
          borderRadius="50%"
          shadow="sm"
          zIndex={2}
          mr={2}
        >
          <Icon fontSize="small">{icon}</Icon>
        </MKBox>
        <MKBox mt={0.5} ml={1}>
          <MKTypography variant="h6" fontWeight="bold" color={isDark ? "white" : "dark"}>
            {title}
          </MKTypography>
          {dateTime && (
            <MKTypography
              variant="caption"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.6 : 1}
              fontWeight="bold"
            >
              {dateTime}
            </MKTypography>
          )}
          <MKBox mt={1} mb={1.5}>
            <MKTypography
              variant="button"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
              fontWeight="regular"
            >
              {description}
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

TimelineItem.defaultProps = {
  color: "info",
  lastItem: false,
};

TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};

export default TimelineItem;
