import * as React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text, Pressable, TextInput } from "react-native";

type UserProps = {
  name: string;
  email: string;
  profileImage: string;
};

type JobProps = {
  title: string;
  company: string;
  salary: string;
  location: string;
  jobImage: string;
};


const UserProfile: React.FC<UserProps> = ({ name, email, profileImage }) => (
  <View style={styles.userProfileContainer}>
    <View>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
    </View>
    <Image resizeMode="cover" source={{ uri: profileImage }} style={styles.profileImage} />
  </View>
);


const JobCard: React.FC<JobProps> = ({ title, company, salary, location, jobImage }) => (
  <Pressable style={styles.jobCardContainer} onPress={() => console.log(`Pressed on ${title}`)}>
    <View style={styles.jobCardHeader}>
      <Image resizeMode="cover" source={{ uri: jobImage }} style={styles.jobImage} />
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{title}</Text>
        <Text style={styles.jobCompany}>{company}</Text>
      </View>
    </View>
    <View style={styles.jobDetails}>
      <Text style={styles.jobSalary}>{salary}</Text>
      <Text style={styles.jobLocation}>{location}</Text>
    </View>
  </Pressable>
);

const Homepage: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.timeIconContainer}>
      <Text style={styles.timeText}>9:41</Text>
      <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f69e8b0e26b47b46529b3ae667b7adf6dddab8b366d69a9e4ab3cb661a313a1e?apiKey=a8fc774f70bc41feb589e7967489574e&" }} style={styles.timeIconImage} />
    </View>
    <UserProfile name="Yidana" email="yidana@gmail.com" profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/bfaa51901590aa204d587b9a2a424897c309369eaab47d1db8ebf00309fd373b?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c32ee9ed06c15d2739db6b902f8e494f4c4faf5d1284d6e33007bb5c8a47132c?apiKey=a8fc774f70bc41feb589e7967489574e&" }} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      </View>
      <Pressable onPress={() => console.log('Filter pressed')}>
        <Image resizeMode="cover" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/db40f5ea65d2203b28a03b1b32a45f95c9e2b5d3969ed4d61a197c65508b2d08?apiKey=a8fc774f70bc41feb589e7967489574e&" }} style={styles.filterIcon} />
      </Pressable>
    </View>
    <View style={styles.sectionHeadingContainer}>
      <Text style={styles.sectionHeadingText}>Featured Jobs</Text>
      <Pressable onPress={() => console.log('See all featured jobs pressed')}>
        <Text style={styles.seeAllText}>See all</Text>
      </Pressable>
    </View>
    <JobCard title="Senior Developer" company="Google" salary="$150,000/y" location="San Francisco, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/9267ad949794b62927fef00935a080aaedc4962318b4f161d71ff54765b8c651?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Backend Engineer" company="Microsoft" salary="$120,000/y" location="Seattle, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/11c8fc8eb4f073ca7c66fe932d294e93042fd64b03a710871cd130f2f1b9ea9d?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Product Designer" company="Adobe" salary="$110,000/y" location="New York, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/baa0e6008c9e330fdd5f4a6003c58ce546e1114b3af63c6d5cf7178e1192ad76?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Data Scientist" company="Twitter" salary="$130,000/y" location="Los Angeles, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c6776535e82fe507d33eaf243b4e6f25f14473a59e1ff0adf1f3eeec82a1f986?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="UX Researcher" company="Netflix" salary="$90,000/y" location="San Diego, US" jobImage="http://b.io/ext_25-" />
    <JobCard title="Mobile Developer" company="Spotify" salary="$115,000/y" location="Boston, US" jobImage="http://b.io/ext_26-" />
    <JobCard title="DevOps Engineer" company="Amazon" salary="$140,000/y" location="Austin, US" jobImage="http://b.io/ext_27-" />
    <JobCard title="Security Analyst" company="Cisco" salary="$100,000/y" location="Chicago, US" jobImage="http://b.io/ext_28-" />
    <View style={styles.sectionHeadingContainer}>
      <Text style={styles.sectionHeadingText}>Popular Jobs</Text>
      <Pressable onPress={() => console.log('See all popular jobs pressed')}>
        <Text style={styles.seeAllText}>See all</Text>
      </Pressable>
    </View>
    <JobCard title="Jr Executive" company="Burger King" salary="$96,000/y" location="Los Angeles, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/11c8fc8eb4f073ca7c66fe932d294e93042fd64b03a710871cd130f2f1b9ea9d?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Product Manager" company="Beats" salary="$84,000/y" location="Florida, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/baa0e6008c9e330fdd5f4a6003c58ce546e1114b3af63c6d5cf7178e1192ad76?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Data Analyst" company="Facebook" salary="$86,000/y" location="New York, US" jobImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c6776535e82fe507d33eaf243b4e6f25f14473a59e1ff0adf1f3eeec82a1f986?apiKey=a8fc774f70bc41feb589e7967489574e&" />
    <JobCard title="Software Engineer" company="Tesla" salary="$130,000/y" location="San Jose, US" jobImage="http://b.io/ext_25-" />
    <JobCard title="Frontend Developer" company="Apple" salary="$125,000/y" location="Cupertino, US" jobImage="http://b.io/ext_26-" />
    <JobCard title="Graphic Designer" company="Canva" salary="$88,000/y" location="San Francisco, US" jobImage="http://b.io/ext_27-" />
  </ScrollView>
);

const styles = StyleSheet.create({
  // Add your styles here
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  timeIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  timeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeIconImage: {
    width: 24,
    height: 24,
  },
  userProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    padding: 8,
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  sectionHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 16,
    color: "#007BFF",
  },
  jobCardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  jobCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  jobImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 14,
    color: "#666",
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jobLocation: {
    fontSize: 14,
    color: "#666",
  },
});

export default Homepage;
